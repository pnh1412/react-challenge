import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    clearTimeout(typingTimeout);

    setTypingTimeout(setTimeout(() => {
      fetchData(value);
    }, 500));
  };

  const fetchData = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/countries?limit=10&search=${searchTerm}`);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearchInput}
        className="border border-gray-300 px-3 py-2 rounded-md"
      />
      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      <ul className="mt-2">
        {countries.map(country => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
