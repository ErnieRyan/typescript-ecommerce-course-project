import { Hero, FeaturedProducts } from "@/components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { type ProductsResponse, customFetch } from "@/utils";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(
    "/products?featured=true"
  );
  console.log(response);

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
