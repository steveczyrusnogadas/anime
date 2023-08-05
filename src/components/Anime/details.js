import React from 'react';

/**
 * Separated the details section for modularity
 * Made the image clickable to open the anime's page in myanimelist.net for accessiblity
 * Used webp image format for faster loading
 */
const AnimeDetails = ({ anime }) => (
  <div className="lg:columns-2 md:columns-1 gap-8 py-5">
    <div>
      <a href={anime.url} target="_blank" rel="noopener noreferrer">
        <img
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className="w-full aspect-auto"
        />
      </a>
    </div>
    <div>
      <a href={anime.url} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold text-center pb-5 xs:pt-5">
          {anime.title} ({anime.type})
        </h1>
      </a>
      <div className="flex justify-around font-bold pb-5">
        <p>YEAR: {anime.year}</p>
        <p>SCORE: {anime.score}</p>
        <p>STATUS: {anime.status}</p>
      </div>
      <p className="text-lg text-justify">{anime.synopsis}</p>
    </div>
  </div>
);

export default AnimeDetails;
