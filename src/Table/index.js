import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://next.json-generator.com/api/json/get/V1HaqbPvv',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  
  return (
    <ul>
      {data.users.map(item => (
        <li key={item._id}>{item.name.first}</li>
      ))}
    </ul>
  );
}

export default Table;