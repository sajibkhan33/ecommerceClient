import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({ searchParams }) => {
  const category = (await searchParams).category;

  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
