import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import BrandsList from './components/pages/BrandsList'
import CategoriesList from './components/pages/CategoriesList'
import ProductsList from './components/pages/ProductsList'
import Home from './components/pages/Home'
import CategoryProduct from './components/layout/CategoryProduct'
import BrandProduct from './components/layout/BrandProduct'
import Error404 from './components/pages/Error404'

export default function App() {
  return (
    <>    
    <Routes>
      <Route path='' element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path='categories' element={<CategoriesList/>}/>
      <Route path='brands' element={<BrandsList/>}/>
      <Route path='products' element={<ProductsList/>}/>
      <Route path='categories/:id' element={<CategoryProduct/>}/>
      <Route path='brands/:id' element={<BrandProduct/>}/>
      <Route path='*' element={<Error404/>}/>
      </Route>
    </Routes>

    </>
  )
}
