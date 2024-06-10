 
//import Home from './component/home';
//import PurchasedComponent from './component/PurchasedComponent';
import {Routes, Route} from 'react-router-dom';
import   PurchasedCoursesPage from './component/UserPurchased';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={< PurchasedCoursesPage/>}/>
    </Routes>
    </>
  )
}

export default App
