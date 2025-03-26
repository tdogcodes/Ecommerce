import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { TapeSection } from "@/components/tape";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (
    <div>
      <section
        className="rounded bg-neutral-100 py-8 sm:py-6"
        style={{ maskImage: "linear-gradient(to top, transparent, black 10%" }}
      >
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to Leftwing Patriots
            </h2>
            <p className="text-neutral-600 text-xl">
              Get merch that represents your values.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products.data[0].images[0]}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <TapeSection/>
      <section className="py-6">
        <Carousel products={products.data} />
      </section>
      <section className="flex justify-center items-center py-14">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl ">Deport Trump. Save America.</h2>
      </section>
    </div>
  );
}
