import { Hero, FeaturedProducts } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import { type ProductsResponse, customFetch } from "@/utils";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(
    "/products?featured=true"
  );
  return { ...response.data };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
