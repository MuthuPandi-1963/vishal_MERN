import { Link } from 'react-router-dom'
import categoriesData from '../../data/categories'
import CategoryCard from '../layout/CategoryCard'
import ProductsWrapper from '../layout/ProductsWrapper'

export default function CategoriesList() {
  return (
   <ProductsWrapper>
    {categoriesData.map((val,id)=>(
        <Link to={`${val.id}`} key={id}>
        <CategoryCard  {...val} />
        </Link>
    ))}
   </ProductsWrapper>
  )
}
