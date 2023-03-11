import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  return (
    <div>
      <div style={{ width: "340px" }}  className="mb-6">
        <Link to={`/video/${video?.videoId}`}>
          <img className="rounded-xl" src={video?.thumbnails[0]?.url} alt="thumnail" />
        </Link>
        <div className="flex px-2 text-md font-semibold h-12 overflow-hiddens">
          <div className="w-12 h-12 rounded-full overflow-hidden mt-2 mr-2">
            <img src={video?.author?.avatar[0]?.url} alt="" />
          </div>
          {video?.title.substring(0, 40)}
        </div>
        <div className="ml-14">
          <div className="flex items-center">
            <h1 className="text-gray-600">{video?.author?.title}</h1>
            <h1 className="mt-1 mx-1">
              {" "}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-gray-600" />
              )}
            </h1>
          </div>
          <div className="flex">
            <p className="text-gray-600">{`${abbreviateNumber(
              video?.stats?.views,
              2
            )} Views`}</p>
            <p className="text-gray-600 ml-4">{video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
