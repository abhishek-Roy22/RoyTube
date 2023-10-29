import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoGridItem from './VideoGridItem';
import Sidebar from '../layouts/Sidebar';
import { fetchFromNextAPI } from '../hook/fetchFromNextAPI';

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromNextAPI(`search?q=${searchTerm}&part=snippet&gl=IN`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow">
      <Sidebar />
      <div className="overflow-x-hidden px-2 lg:px-8 pb-4">
        <p className="text-2xl text-neutral-500 font-bold py-2">
          Search Results for:{' '}
          <span className="text-rose-500">{searchTerm} </span>
          videos
        </p>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos &&
            videos?.map((video, i) => <VideoGridItem key={i} video={video} />)}
        </div>
      </div>
    </div>
  );
}

export default SearchFeed;
