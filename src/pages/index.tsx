import Banner from "@/components/Banner";
import Products from "@/components/header/Products";
import { ProductProps } from "../../type";

interface Props{
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  return (
    <main>
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
  const productData = await res.json();
  return { props: { productData } };
};