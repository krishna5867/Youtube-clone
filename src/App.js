import './App.css';
// import styled from 'styled-components';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import VideoCardDetails from './components/VedioCardDetails'
import Search from './components/Search';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/video/:id" element={<VideoCardDetails />} />
        <Route exact path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
