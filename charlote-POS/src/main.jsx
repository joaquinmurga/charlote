import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './componentes/Login'
import ProductList from './componentes/producto/Producto'
import AddProduct from './componentes/producto/addProducto'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

      <AddProduct/>

  </BrowserRouter>,
)
