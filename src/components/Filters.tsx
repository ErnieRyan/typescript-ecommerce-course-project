import { Form, useLoaderData, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FormInput, FormSelect } from ".";
import { type ProductsResponseWithParams } from "@/utils";

const Filters = () => {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        options={meta.categories}
        name="category"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        options={meta.companies}
        name="company"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="select order"
        options={meta.categories}
        name="order"
        defaultValue={order}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
};
export default Filters;
