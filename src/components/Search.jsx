import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/ContextApi';
import { fetchApi } from '../utils/Api';
import SearchVideos from './SearchVideos'


const Search = () => {
    const {query} = useParams();
    const [searchVideo, setSearchVideo] = useState();
    const {setLoading} = useContext(Context);

    useEffect(()=>{
        setLoading(true)
        fetchSerchData()
        setLoading(false)
    },[])

    const fetchSerchData = () => {
        setLoading(true);
        fetchApi(`search/?q=${query}`).then((data)=> {
            console.log(`search-contents-> ${data?.contents}`);
            setSearchVideo(data?.contents)
            setLoading(false)
        })
    }
    return (
    <>
    <div className="">
        {searchVideo?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchVideos
                                key={video.videoId}
                                video={video}
                            />
                        );
        })}
    </div>
    </>
    )
}

export default Search