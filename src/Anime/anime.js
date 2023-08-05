import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      console.log('asd', {data: response.data.data});
      setAnime(response.data.data);
    };
    fetchAnime();
  }, [id]);

  if (!anime) return null;

  return (
    <div>
      <h1 className="text-5xl font-bold underline">{anime.title}</h1>
      <p>{anime.synopsis}</p>
    </div>
  );
}

export default Anime;
