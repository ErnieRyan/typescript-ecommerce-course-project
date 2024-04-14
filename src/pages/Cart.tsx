import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <>
      <h1 className="text-4xl">Cart</h1>
      <Button asChild size={"lg"}>
        <Link to="/">back home</Link>
      </Button>
    </>
  );
};
export default Cart;
