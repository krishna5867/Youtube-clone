import React, {useContext} from 'react'
import { Context } from "../context/ContextApi";
import SideFeed from './SideFeed'
import VideoCards from './VideoCards';

const Feed = () => {
    const {search, loading} = useContext(Context);
return (
    <>
    <div className='w-full flex'>
        <div className='w-2/12 md:block hidden'>
            <SideFeed />
        </div>
        <div className='md:flex flex-wrap gap-6 justify-center mx-auto px-2 mt-1'>
        {!loading && search.map((item) => {
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