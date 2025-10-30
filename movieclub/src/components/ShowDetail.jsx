import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(res.data);
    };
    const fetchEpisodes = async () => {
      const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
      setEpisodes(res.data);
    };
    fetchDetails();
    fetchEpisodes();
  }, [id]);

  if (!show) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image?.medium} alt={show.name} />
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
      <h3>Bölümler</h3>
      <ul>
        {episodes.map(ep => (
          <li key={ep.id}>{ep.name} - {ep.season}/{ep.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDetail;