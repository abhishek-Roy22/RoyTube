import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import Logo from '../assets/youtubeLogo.png';
import Button from '../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  console.log(searchTerm);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 lg:mx-4 sticky top-0 bg-white z-50 pb-2">
      <PageHeaderFirstSectin hidden={showFullWidthSearch} />

      <form
        className={`gap-4 flex-grow flex justify-center ${
          showFullWidthSearch ? 'flex' : 'hidden md:flex'
        }`}
        onSubmit={handleSubmit}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            className="flex-shrink-0 hover:bg-neutral-300 rounded-full w-10 h-10 flex items-center justify-center p-2.5 transition-[hover] duration-200 ease-in-out"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-neutral-400 shadow-inner shadow-neutral-200 py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button
            type="submit"
            className="py-2 px-4 rounded-r-full  border-neutral-400 border border-r-0 flex-shrink-0"
          >
            <Search />
          </Button>
        </div>
        <Button
          type="button"
          className="flex-shrink-0 rounded-full w-10 h-10 flex items-center justify-center p-2.5 bg-neutral-200 hover:bg-neutral-300 transition-all duration-75 ease-in-out"
        >
          <Mic />
        </Button>
      </form>

      <div
        className={`flex-shrink-0 md:gap-2 flex items-center justify-center ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className="md:hidden hover:bg-neutral-300 rounded-full md:w-10 md:h-10 w-8 h-8  flex items-center justify-center md:p-2.5 transition-[hover] duration-200 ease-in-out"
        >
          <Search />
        </Button>
        <Button className="md:hidden hover:bg-neutral-300 rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center md:p-2.5 transition-all duration-75 ease-in-out">
          <Mic />
        </Button>
        <Button className="hover:bg-neutral-300 rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center md:p-2.5 transition-all duration-75 ease-in-out">
          <Upload />
        </Button>
        <Button className="hover:bg-neutral-300 rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center md:p-2.5 transition-all duration-75 ease-in-out">
          <Bell />
        </Button>
        <Button className="hover:bg-neutral-300 rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center md:p-2.5 transition-[bg] duration-200 ease-in-out">
          <User />
        </Button>
      </div>
    </div>
  );
};

export function PageHeaderFirstSectin({ hidden = false }) {
  return (
    <div
      className={`gap-2 md:gap-4 items-center flex-shrink-0 ${
        hidden ? 'hidden' : 'flex'
      }`}
    >
      <button
        className="hover:bg-neutral-300 
      rounded-full w-10 h-10 flex items-center justify-center p-2.5
      transition-all duration-75 ease-in-out
      "
      >
        <Menu />
      </button>
      <a href="/">
        <img src={Logo} alt="logo" className="h-6" />
      </a>
    </div>
  );
}

export default PageHeader;
