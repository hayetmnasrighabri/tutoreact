import React, { useState } from 'react'
import Checkbox from './components/form/Checkbox'
import Input from './components/form/Input'
import ProductCategoryRow from './products/ProductCategoryRow'
import ProductRow from './products/ProductRow'
const PRODUCTS=[
  {category: "fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]
function App() {
  const [search, setSearch]=useState('') 
  const [showStockedOnly, setshowStockedOnly] = useState(false)
  const visibleProducts = PRODUCTS.filter(product =>{
    if(showStockedOnly && !product.stocked){
      return false
    }
    if(search && !product.name.includes(search)){
      return false
    }
   return true
  }
    
)
 
  return (
    <div className='container my-3'>
      <SearchBar 
         showStockedOnly={showStockedOnly} 
         onStockedOnlyChange={setshowStockedOnly}
         search={search}
         onSearch={setSearch}
         /> 
      <ProductTable products={visibleProducts}/>
    </div>
  )
}
function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearch}){
  
  return(
    <div className='mb-3'>
      <Input
       type='text'
       value={search}
       onChange={onSearch}
       placeholder='Rechercher...'
        
    />
    <Checkbox 
       id="stocked" 
       checked={showStockedOnly} 
       onChange={onStockedOnlyChange} 
        label="n'afficher que les produit en stock "/>
    </div>
    
  )
}
function ProductTable({products}){
  const rows=[]
  let lastCategory=null
  for (let product of products){
    if(product.category!==lastCategory){
      rows.push(<ProductCategoryRow name={product.category} key={product.category} />)
    }
    lastCategory=product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }
  return(
    <table className='table'>
      <thead>
        <th>name</th>
        <th>prix</th>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </table>
  )
}
export default App
