import React, { useEffect, useState } from 'react';
import Sidebar from '../layouts/Sidebar';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../hook/fetchFromAPI';
import { fetchFromNextAPI } from '../hook/fetchFromNextAPI';
import VideoGridItem from './VideoGridItem';

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel/about?id=${id}`).then((data) =>
      setChannelDetail(data)
    );

    fetchFromNextAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow">
      <Sidebar />
      <div className="overflow-x-hidden px-2 lg:px-8 max-w-6xl mx-auto flex flex-col">
        <div className="w-[1024px] h-44 bg-gradient-to-r from-teal-300 to-teal-500 rounded-lg mb-5"></div>
        <div className="flex flex-col md:flex-row gap-5 py-5">
          <div className="w-48 h-48 rounded-full border-2 border-teal-300 p-2 overflow-hidden">
            <img
              src={ChannelDetail?.avatar?.thumbnails[0].url}
              alt={ChannelDetail?.title}
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start px-5 gap-2">
            <h1 className="text-3xl font-bold">{ChannelDetail?.title}</h1>
            <p className="text-neutral-500 text-lg">
              {ChannelDetail?.vanityChannelUrl}
            </p>
            <p className="text-neutral-500 text-lg">
              {ChannelDetail?.subscriberCountText}.{' '}
              {ChannelDetail?.viewCountText}
            </p>
          </div>
        </div>
        <hr
          style={{ height: '1px', backgroundColor: 'gray', border: 'none' }}
        />
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-3">
          {videos &&
            videos?.map((video, i) => <VideoGridItem key={i} video={video} />)}
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
