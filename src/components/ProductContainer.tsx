import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { ProductsResponse } from "@/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ProductList from "./ProductList";

const ProductContainer = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};
export default ProductContainer;
