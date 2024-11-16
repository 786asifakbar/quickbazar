import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div className="pt-20 text-center">
      <h1 className="text-4xl font-bold">Product Details for ID: {id}</h1>
      <p className="mt-4">This is a placeholder page for product details.</p>
    </div>
  );
};

export default ProductPage;
