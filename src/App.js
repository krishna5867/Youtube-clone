import './App.css';
import styled from 'styled-components';
import { BiAlignLeft } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
// import VideoCards from './components/VideoCards';
import VideoCardDetails from './components/VedioCardDetails'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/video/:id" element={<VideoCardDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
