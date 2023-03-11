import React, {useContext} from 'react'
import { Context } from "../context/ContextApi";
import SideFeed from './SideFeed'
import VideoCards from './VideoCards';

const Feed = () => {
    const {search, loading} = useContext(Context);
return (
    <>
    <div className='w-full flex'>
        {/* <div className='w-2/12 border'>
            <SideFeed />
        </div> */}
        {/* <div className='w-10/12 border flex flex-wrap justify-between'> */}
        <div className='flex flex-wrap justify-between px-2 mt-1'>
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