import {
  BadgeDollarSign,
  CodeIcon,
  Film,
  Gamepad2,
  History,
  Home,
  Library,
  Music,
  PlaySquare,
  Podcast,
  Radio,
  School,
  Shirt,
  ShoppingBag,
  Trophy,
  VenetianMask,
} from 'lucide-react';
const categories = [
  { name: 'Home', icon: <Home /> },
  { name: 'JS Mastery', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <Music /> },
  { name: 'Education', icon: <School /> },
  { name: 'Podcast', icon: <Podcast /> },
  { name: 'Movie', icon: <Film /> },
  { name: 'Gaming', icon: <Gamepad2 /> },
  { name: 'Live', icon: <Radio /> },
  { name: 'Sport', icon: <Film /> },
  { name: 'Fashion', icon: <Shirt /> },
  { name: 'Beauty', icon: <ShoppingBag /> },
  { name: 'Comedy', icon: <VenetianMask /> },
  { name: 'Gym', icon: <Trophy /> },
  { name: 'Crypto', icon: <BadgeDollarSign /> },
];

const Sidebar = () => {
  return (
    <>
      <aside className="w-56 h-screen hidden lg:sticky absolute top-20 overflow-y-auto scrollbar-hidden flex-col gap-2 px-2 lg:flex lg:ml-4 pb-10">
        {categories?.map((caterory) => (
          <div
            key={caterory.name}
            className="flex gap-5 pt-2 pb-2 pl-2 rounded-md first:bg-white hover:bg-white cursor-pointer"
          >
            {caterory.icon}
            <p className="font-bold">{caterory.name}</p>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
