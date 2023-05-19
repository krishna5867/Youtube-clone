import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import YtLogo from '../images/yt-logo.png'
import YtLogo2 from '../images/yt-logo-mobile.png'
import Dp from '../images/kk.png'
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { Context } from '../context/ContextApi';
import Loader from './Loader';

const Header = () => {
    const [input, setInput] = useState();
    const navigate = useNavigate();
    const {loading, setMobile, mobile} = useContext(Context);

    const handleInput = (e) => {
        if((e.key === "Enter") && input?.length > 0){
            navigate(`/search/q=${input}`)
        }

    }
    
    const handleMobileMenu = () => {
        setMobile(!mobile)
    }
return (
    <>
    {loading && <Loader />}
<div className="sticky top-0 w-full flex justify-between bg-black text-center items-center px-2 text-white h-16">
    <div className="flex items-center md:w-2/12 w-3/12">
    <div className='md:text-3xl text-2xl md:hiddend flex' onClick={handleMobileMenu}><SlMenu /></div>
    {/* <div className=''><YtLogo2 /></div> */}
    <div className='ml-4'><Link to='/'><img src={YtLogo}className='md:w-32' alt=""/></Link></div>
    
    </div>
    <div className='w-6/12 relative'>
    <input 
    type="text"
    placeholder='Search'
    onChange={(e)=> setInput(e.target.value)}
    onKeyUp={handleInput}
    className='pl-6 pr-10 rounded-full h-8 text-black border-none w-full focus:outline-none'
    />
    <div className='absolute right-0 top-0 mt-1 mr-3 text-2xl text-black'><IoIosSearch /></div>
</div>

    <div className='flex justify-between items-center'>
        <div className="hidden md:flex">
            <div className="mr-4"><RiVideoAddLine className='text-3xl'/></div>
            <div className="mr-4"><FiBell className='text-3xl'/></div>
        </div>
    <div className='h-10 w-10 rounded-full overflow-hidden'>
        <img src={Dp} alt="" className='rounded-ful'  />
    </div>
    </div>


</div>
    </>
)
}

export default Header