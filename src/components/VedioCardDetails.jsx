import React, { useContext, useState, useEffect } from "react";
import { fetchApi } from "../utils/Api";
import { useParams } from "react-router-dom";
import { Context } from "../context/ContextApi";
import ReactPlayer from "react-player/youtube";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import RelatedVideos from "./RelatedVideos";

const VedioCardDetails = () => {
  const { setLoading } = useContext(Context);
  const [details, setDetails] = useState();
  const [related, setRelated] = useState();
  const { id } = useParams();
  console.log(`details ${details}`);
  console.log(`related ${related}`);


  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchApi(`video/details/?id=${id}`).then((contents) => {
      console.log(`videoDetails ${contents}`);
      setDetails(contents);
      setLoading(false);
    });
  };

  const fetchRelatedVideo = () => {
    setLoading(true);
    fetchApi(`video/related-contents/?id=${id}`).then((contents) => {
      console.log(`Related-Video ${contents}`);
      setRelated(contents);
      setLoading(false);
    });
  };



  return (
    <>
      <div className="md:flex h-screen gap-12">
        <div className="lg:w-3/6 lg:h-4/6 sm:w-4/6 w-full h-1/2 mt-4 md:mb-0 mb-36 lg:ml-[120px] lg:px-0 px-6">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
            height="100%"
            style={{ backgroundColor: "#000" }}
            playing={true}
          />
          <div className="mt-2">
            <h4 className="text-xl font-semibold">{details?.title}</h4>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mt-2 mr-2">
                <img src={details?.author?.avatar[0]?.url} alt="" />
              </div>

              <div className="flex">
                <div className="text-xl">{details?.author?.title}</div>
                <div className="mt-1 mx-2">
                  {details?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="" />
                    )}
                </div>
              </div>
            </div>
            <div className="ml-14 -mt-4">
              <p className="text-gray-500">{`${abbreviateNumber(details?.stats?.views, 2)}`}</p>
              <p className="ml-4">{details?.publishedTimeText}</p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="md:w-2/6 md:px-0 px-6 mt-4 overflow-y-auto">
        {related?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <RelatedVideos
                                key={index}
                                video={item?.video}
                            />
                        );
                    })}
        </div>
      </div>
    </>
  );
};

export default VedioCardDetails;


