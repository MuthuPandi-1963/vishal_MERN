import productsData from "../../data/products";
import ProductCard from "../layout/ProductCard";
import ProductsWrapper from "../layout/ProductsWrapper";

export default function ProductsList() {
  return (
    <ProductsWrapper>
    {productsData.map((val,id)=>(
        <ProductCard key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}
