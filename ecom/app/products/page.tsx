import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/product-list";

export default async function ProductsPage(){

     const products = await stripe.products.list({
        expand: ["data.default_price"]
      });

    return <div>
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl my-6">All Products</h1>
        <ProductList products={products.data}/>
    </div>
}
