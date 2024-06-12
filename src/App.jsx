 
//import Home from './component/home';
//import PurchasedComponent from './component/PurchasedComponent';
import {Routes, Route} from 'react-router-dom';
//import   PurchasedCoursesPage from './component/UserPurchased';
 //import Register from './component/registration';
 import UpdateProfile from './component/profile2';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={< UpdateProfile/>}/>
    </Routes>
    </>
  )
}

export default App
