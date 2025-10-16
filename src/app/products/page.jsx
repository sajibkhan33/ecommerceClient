import ProductList from "@/components/ProductList";

const ProductsPage = async ({ searchParams }) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
