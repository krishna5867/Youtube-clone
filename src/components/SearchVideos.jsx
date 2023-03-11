import React from "react";
import { Link } from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchVideos = ({ video }) => {
    return (
    <>
    <div className="sm:flex px-6 sm:mt-2 mt-6 w-full">
        <div className="sm:mb-6 md:w-4/12 sm:w-8/12">
            <Link to={`/video/${video?.videoId}`}>
            <img className='rounded-xl w-full' src={video?.thumbnails[0]?.url} alt="thumnail" />
            </Link>
        </div>
        <div className="sm:ml-4 sm:w-8/12">
                <div className="text-xl font-semibold">{video?.title}</div>
            <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mt-2 mr-2">
                    <img src={video?.author?.avatar[0]?.url} alt="" />
                </div>
                <div className="text-xl">{video?.author?.title}</div>
                <div className="mt-1 mx-2 text-">
                    {" "}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="" />
                    )}
                </div>
            </div>
            <div className="flex ml-4">
            <p>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</p>
            <p className="ml-4">{video?.publishedTimeText}</p>
            </div>
        </div>
    </div>
    </>
    );
};

export default SearchVideos;
