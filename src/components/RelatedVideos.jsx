import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const RelatedVideos = ({video}) => {
    return (
    <>
        <div className="flex items-center">
            <div className='mb-6 w-1/2'>
            <Link to={`/video/${video?.videoId}`}>
            <img src={video?.thumbnails[0]?.url} alt="thumnail" style={{width:'240px'}}/>
        </Link>
            </div>
            <div className='w-1/2'>
                <div className="text-xl font-semibold">{video?.title}</div>
                    <span>{video?.author?.title}</span>
                    <span className="mt-1 mx-2 text-">
                        {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="" />
                        )}
                    </span>
                <div className="">
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</span>
                <span className="ml-2">{video?.publishedTimeText}</span>
            </div>
            </div>
        </div>

            
    </>
    )
}

export default RelatedVideos