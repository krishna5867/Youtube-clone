import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const RelatedVideos = ({video}) => {
    return (
    <>
        <div className="lg:flex md:gap-2 gap-8 md:mt-0 lg:mb-0 mb-6 w-full">
            <div className='lg:mb-8 mb-2'>
                <Link to={`/video/${video?.videoId}`}>
                <img src={video?.thumbnails[0]?.url} alt="thumnail" className='w-full rounded-xl'/>
                </Link>
            </div>

            <div className='overflow-hidden md:w-full'>
                <div className="text-xl font-semibold">{video?.title}</div>
                    <div className="flex">
                    <span>{video?.author?.title}</span>
                    <span className="mt-1 mx-1">
                        {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="" />
                        )}
                    </span>
                    </div>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</span>
                <span className="ml-2">{video?.publishedTimeText}</span>
            </div>
        </div>

            
    </>
    )
}

export default RelatedVideos