import React from 'react';

const Offline = () => {
  const handleRefresh = (e) => {
    e.preventDefault();

    window.location.reload();
  };

  return (
    <main className="max-w-7xl mx-auto min-h-[80vh] grid place-content-center gap-5">
      <h1 className="text-3xl font-bold whitespace-nowrap text-center">
        Connect to the Internet
      </h1>
      <p className="text-lg whitespace-nowrap text-center">
        You're offline. Check your connection.
      </p>
      <button
        onClick={handleRefresh}
        className="py-2 px-4 border border-sky-400 rounded-full hover:bg-[#263850] hover:border-none duration-100 w-fit place-self-center font-bold text-blue-400 outline-none mt-3"
      >
        Retry
      </button>
    </main>
  );
};

export default Offline;
