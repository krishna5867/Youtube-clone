import React, {useContext} from 'react'
import { Context } from "../context/ContextApi";
import SideFeed from './SideFeed'
import VideoCards from './VideoCards';

import { BiAlignLeft } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Feed = () => {
    const {search, loading} = useContext(Context);
return (
    <>
    <div className='w-full flex'>
        {/* <div className='w-2/12 border'>
            <SideFeed />
        </div> */}
        <div className='md:flex flex-wrap gap-6 justify-center mx-auto px-2 mt-1'>
        {!loading &&
                        search.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCards
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
        </div>
    </div>


    </>
)
}

export default Feed