import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import YtLogo from '../images/yt-logo.png'
import Dp from '../images/kk.png'
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
    const [input, setInput] = useState();
    const navigate = useNavigate();

    const handleInput = (e) => {
        if((e.key === "Enter") && input?.length > 0){
            navigate(`/search/q=${input}`)
        }

    }
return (
    <>
<div className="sticky top-0 w-full flex justify-between bg-black text-center items-center px-12 text-white h-16">
    <div className='w-1/12'><Link to='/'><img src={YtLogo} alt=""/></Link></div>
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

    <div className='flex justify-between w-1/12'>
        <RiVideoAddLine className='text-3xl'/>
        <FiBell className='text-3xl'/>
    <div className='h-8 w-8 rounded-full overflow-hidden bg-slate-300'>
        <img src={Dp} alt=""  />
    </div>
    </div>


</div>
    </>
)
}

export default Header