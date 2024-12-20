import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainMenuApi from '../../services/api/MainMenuApi';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const items = await MainMenuApi.getItems();
        setMenuItems(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.route}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
