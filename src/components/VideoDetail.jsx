import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../hook/fetchFromAPI';
import { fetchFromNextAPI } from '../hook/fetchFromNextAPI';
import VideoGridItem from './VideoGridItem';
import CommentSection from './CommentSection';

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  const commentLength = comments?.comments?.length;
  const profileUrl = comments?.comments?.map((c) =>
    c.authorThumbnails.map((thumbnail) => thumbnail.url)
  );

  useEffect(() => {
    fetchFromAPI(`video/comments?id=${id}`).then((comment) =>
      setComments(comment)
    );

    fetchFromAPI(`video?id=${id}`).then((data) => setVideoInfo(data));

    fetchFromNextAPI(`search?relatedToVideoId=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  return (
    <div className="h-full flex px-2 lg:px-8">
      <div className="flex h-screen overflow-y-auto flex-col w-full justify-between lg:flex-row gap-4">
        <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hidden">
          <div className="aspect-video rounded-lg px-2">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player bg-cover rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl p-2 text-neutral-600 font-semibold whitespace-normal">
              {videoInfo?.videoDetails.title}
            </h1>
            <span className="text-neutral-500 text-sm">
              {videoInfo?.videoDetails.viewCount} views.
            </span>
          </div>
          <div className="w-full flex flex-col items-start p-2">
            <h2 className="text-2xl font-bold text-neutral-500">
              {commentLength} Comments
            </h2>
            <CommentSection
              comments={comments}
              profileUrl={profileUrl}
              visibleItemCount={5}
            />
          </div>
        </div>
        <div className="hidden lg:block w-96 overflow-y-auto px-2 scrollbar-hidden">
          {videos &&
            videos?.map((video, i) => <VideoGridItem key={i} video={video} />)}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
