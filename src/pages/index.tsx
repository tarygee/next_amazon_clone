import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Header from "@/components/header/Header";

interface Props{
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  return (
    <main>
      {/* <Header/> */}
      <div className="w-screen-2xl mx-auto">
        <Banner/>
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-20">
          <Products productData = {productData}/>
        </div>
      </div>
    </main>
  );
};

// SSR for data fetching

export const getServerSideProps = async() =>{
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
  // const res = await fetch('https://0135-197-186-7-63.ngrok-free.app/api/v1/products')
  const productData = await res.json();
  return { props: { productData } };
};

