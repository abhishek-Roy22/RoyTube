import { useEffect, useState } from 'react';
import VideoGridItem from './components/VideoGridItem';
import Sidebar from './layouts/Sidebar';
import { fetchFromAPI } from './hook/fetchFromAPI';
import Offline from './components/Offline';

function App() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`trending`).then((data) => setVideos(data));
  }, []);

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow">
      <Sidebar />
      <div className="overflow-x-hidden px-2 lg:px-8 pb-4">
        {navigator.onLine ? (
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos &&
              videos?.contents?.map((video, i) => (
                <VideoGridItem key={i} video={video.video} />
              ))}
          </div>
        ) : (
          <Offline />
        )}
      </div>
    </div>
  );
}

export default App;
