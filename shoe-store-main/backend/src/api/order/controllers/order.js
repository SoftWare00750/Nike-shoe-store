("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // Validate Stripe key
    if (!process.env.STRIPE_KEY) {
      ctx.response.status = 500;
      return { error: { message: "Stripe API key not configured" } };
    }

    // Validate Client URL
    if (!process.env.CLIENT_URL) {
      ctx.response.status = 500;
      return { error: { message: "Client URL not configured" } };
    }

    const { products } = ctx.request.body;

    // Validate products
    if (!products || products.length === 0) {
      ctx.response.status = 400;
      return { error: { message: "No products provided" } };
    }

    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          if (!item) {
            throw new Error(`Product with ID ${product.id} not found`);
          }

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity || 1,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["IN"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + `/success`,
        cancel_url: process.env.CLIENT_URL + "/failed",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      console.error("Order creation error:", error);
      ctx.response.status = 500;
      return { 
        error: { 
          message: error.message || "Failed to create order",
          details: error.toString()
        } 
      };
    }
  },
}));