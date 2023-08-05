import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import debounce from '../../utils/debounce';
import { fetchAnime, fetchAnimeDetails } from '../../services/jikan/api';
import AnimeDetails from './details';

/**
 * Added a debounce function to limit the number of requests sent to the API
 * Used react-select for faster development and less complication
 * Used webp image format for faster loading
 * Kept the anime details in one page instead of redirecting to another page to make use of the empty space
 */
const AnimeSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const debouncedFetchAnime = useCallback(debounce(fetchAnime, 300), []);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    debouncedFetchAnime(newValue).then(setOptions);
  };

  const handleChange = (selectedOption) => {
    fetchAnimeDetails(selectedOption.value).then(setSelectedAnime);
  };

  const formatOptionLabel = ({ value, label, data }) => (
    <div className="flex items-center">
      <img
        src={data.images.webp.image_url}
        alt={label}
        className="w-10 h-10 mr-3"
      />
      <span>{label}</span>
    </div>
  );

  return (
    <div>
      <Select
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={options}
        inputValue={inputValue}
        placeholder="Search your anime..."
        formatOptionLabel={formatOptionLabel}
      />
      {selectedAnime && <AnimeDetails anime={selectedAnime} />}
    </div>
  );
};

export default AnimeSearch;
