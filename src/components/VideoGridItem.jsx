import { Link } from 'react-router-dom';

const VideoGridItem = ({ video }) => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        to={`/video/${video?.videoId || video?.id.videoId}`}
        className="relative aspect-video"
      >
        <img
          src={
            video?.thumbnails?.map((img) => img.url) ||
            video?.snippet?.thumbnails?.high?.url
          }
          alt="thumbnail"
          className={`block w-full h-full object-cover transition-[border-radius] duration-200`}
        />
        <div className="absolute bottom-1 right-1 bg-neutral-800 text-neutral-200 text-sm px-0.5 rounded">
          {video?.lengthText}
        </div>
      </Link>
      <div className="flex flex-col">
        <Link
          to={`/video/${video?.videoId || video?.id.videoId}`}
          className="font-bold"
        >
          {video?.title?.slice(0, 60) || video?.snippet?.title?.slice(0, 60)}
        </Link>
        <Link
          to={`/channel/${video?.channelId || video?.id.videoId}`}
          className="text-neutral-500 text-sm"
        >
          {video?.channelName || video?.snippet?.channelTitle}
        </Link>
        <div className="text-neutral-500 text-sm">
          {`${video?.viewCountText || ''} • ${video?.publishedTimeText || ''}`}
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
