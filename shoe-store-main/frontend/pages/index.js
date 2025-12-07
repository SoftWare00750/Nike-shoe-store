import Herobanner from "@/components/Herobanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {

 return (
    <main className="bg-gray-50">
      <Herobanner />
      
      <Wrapper>
        {/* Heading Section */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Cushioning for Your Miles
          </h2>
          <p className="text-md md:text-xl text-gray-600">
            A lightweight Nike ZoomX midsole is combined with
            increased stack heights to help provide cushioning
            during extended stretches of running.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 px-5 md:px-0 pb-16">
          {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: {
      products,
    },
  };
}