import React, { useState, useCallback } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from 'lodash';

function Animes() {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const fetchAnime = async (newValue) => {
    if (newValue) {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${newValue}`
      );
      const animeOptions = response.data.data.map((anime) => ({
        value: anime.mal_id,
        label: anime.title,
      }));
      console.log('asd', {data: response.data});
      setOptions(animeOptions);
    } else {
      setOptions([]);
    }
  };

  const debouncedFetchAnime = useCallback(debounce(fetchAnime, 300), []);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    debouncedFetchAnime(newValue);
  };

  const handleChange = (selectedOption) => {
    navigate(`/anime/${selectedOption.value}`);
  };

  return (
    <Select
      onInputChange={handleInputChange}
      onChange={handleChange}
      options={options}
      inputValue={inputValue}
    />
  );
}

export default Animes;
