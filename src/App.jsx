 
//import Home from './component/home';
//import PurchasedComponent from './component/PurchasedComponent';
import {Routes, Route} from 'react-router-dom';
//import   PurchasedCoursesPage from './component/UserPurchased';
 import Register from './component/registration';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<  Register/>}/>
    </Routes>
    </>
  )
}

export default App
