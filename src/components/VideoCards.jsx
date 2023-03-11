import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  return (
    <div>
      <div style={{ width: "300px" }} className='mb-6'>
        <Link to={`/video/${video?.videoId}`}>
          <img src={video?.thumbnails[0]?.url} alt="thumnail" />
        </Link>
        <h4 className="text-xl font-semibold">{video?.title}</h4>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mt-2 mr-2">
        <img src={video?.author?.avatar[0]?.url} alt="" />
          </div>
          <h1 className="text-xl">{video?.author?.title}</h1>
          <h1 className="mt-1 mx-2 text-">
            {" "}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="" />
            )}
          </h1>
        </div>
        <div className="flex">
          <p>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</p>
          <p className="ml-4">{video?.publishedTimeText}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
