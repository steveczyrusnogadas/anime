import React from 'react';
import AnimeSearch from '../../components/Anime/search';

/**
 * Created a home page to make the app more readable
 */
const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center pb-5">
        <h1 className="text-5xl font-extrabold">Anime Searcher</h1>
        <p className="text-lg font-bold italic">
          Explore the epicness of your favorite anime!
        </p>
      </div>

      <AnimeSearch className="py-5" />
    </div>
  );
};

export default Home;
