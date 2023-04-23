import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Bookpage from './components/BookPage/Bookpage';
import Addbook from './components/addBook/Addbook';
import BookDetail from './components/bookDetail/BookDetail';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/bookpage' element={<Bookpage/>}/>
          <Route path='/addbook' element={<Addbook/>}/>
          <Route path='/bookDetail' element={<BookDetail/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
