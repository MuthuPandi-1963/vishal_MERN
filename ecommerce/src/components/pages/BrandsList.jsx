import { Link } from "react-router-dom";
import brandsData from "../../data/brands";
import BrandCard from "../layout/BrandCard";
import ProductsWrapper from "../layout/ProductsWrapper";

export default function BrandsList() {
  return (
    <ProductsWrapper>
        {brandsData.map((val,id)=>(
            <Link to={val.id} key={id}>
                <BrandCard {...val}  />
            </Link>
        ))}
    </ProductsWrapper>
  )
}
