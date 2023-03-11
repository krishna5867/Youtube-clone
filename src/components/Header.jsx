import React from 'react'
import { Link } from 'react-router-dom'
import YtLogo from '../images/yt-logo.png'
import Dp from '../images/kk.png'

const Header = () => {
return (
    <>
<div className="sticky top-0 flex justify-between bg-black text-center items-center px-12 text-white h-16">
    <div><Link to='/'><img src={YtLogo} alt="" style={{width:'140px'}}/></Link></div>
    <div> 
        <input type="text" placeholder='search' className='pl-6 rounded-full h-8 focus-none' style={{width: '40rem'}}/>
    </div>
    <div className='h-8 w-8 rounded-full overflow-hidden bg-slate-300'>
        <img src={Dp} alt=""  />
    </div>

</div>
    </>
)
}

export default Header