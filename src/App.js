
 import React from 'react';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList';
 import Home from './page/home/Home';
import Movie from './page/movieDetail/movie';
 export default function App() {
   return (
    <>

    <div className='App'>
<Router>
<Header/>
  <Routes>
    <Route index element={<Home/>}></Route>
      <Route path="movie/:id" element={<Movie/>}></Route>
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
  </Routes>
</Router>
    </div>
    </>
    
   );
 }
 