import React from 'react';
import './App.css';
import {Header} from './features/Header/Header';
import {Footer} from './features/Footer/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {BookList}  from './features/bookList/BookList';
import {BookForm} from './features/addBook/BookForm';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/addBook' element={<BookForm />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
