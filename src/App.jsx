import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import DefaultLayout from "./layout/DefaultLayout"



function App(){
  return(
  <>
  
  <BrowserRouter>
  <Routes>

<Route Component={DefaultLayout}>

<Route path="/" Component={HomePage}></Route>
<Route path="/contacts" Component={Contact}></Route>
<Route path="/products" Component={Products}></Route>

</Route>



  </Routes>
  
  
  </BrowserRouter>
  </>
  )
}

export default App
