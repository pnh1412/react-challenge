import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobBoard = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6); 
  const [showLoadMore, setShowLoadMore] = useState(true); 

  useEffect(() => {
    const fetchJobStories = async () => {
      try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
        setJobIds(response.data.slice(0, visibleJobs));
        setShowLoadMore(response.data.length > visibleJobs);
      } catch (error) {
        console.error('Error fetching job stories:', error);
      }
    };

    fetchJobStories();
  }, [visibleJobs]); 

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const promises = jobIds.map(async (id) => {
          const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return response.data;
        });
        const results = await Promise.all(promises);
        setJobDetails(results);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    if (jobIds.length > 0) {
      fetchJobDetails();
    }
  }, [jobIds]); 

  const loadMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 6);
  };

  return (
    <div>
      <h1 className="text-3xl">Job Stories:</h1>
      <ul>
        {jobDetails.map(job => (
          <li key={job.id} className="border-b border-gray-300 py-2">
            <strong>{job.title}</strong>
            <br />
            <span className="text-gray-800">{job.by} - {new Date(job.time * 1000).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
      {showLoadMore && (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={loadMoreJobs}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default JobBoard;
