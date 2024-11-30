import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import { Route,Routes } from 'react-router-dom';
import StudentList from './component/StudentList';
import HomeComponent from './component/HomeComponent';
import AddComponent from './component/AddComponent';

function App() {
  return (
    <>
     <HeaderComponent/>
     <Routes>
      <Route path='/students' element={<StudentList/>}></Route>
      <Route path='/home' element={<HomeComponent/>}></Route>
      <Route path='/add_students' element={<AddComponent/>}></Route>
     </Routes>
    </>
  );
}

export default App;
