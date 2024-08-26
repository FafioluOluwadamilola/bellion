import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
// import SideMenu from './components/SideMenu.'
import RootLayout from './components/RootLayout'
import AddProduct from './pages/AddProduct'

function App() {
  

  return (
    <>

      <Routes>
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<h1>Home Page</h1>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
      </Route>
      </Routes>

    </>
  )
}

export default App
