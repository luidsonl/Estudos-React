import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Pagination.css'

import BlogSettingsApi from '../../services/api/BlogSettingsApi';
import PokemonApi from '../../services/api/PokemonApi';

const Pagination = ({ archiveType }) => {
  const totalItemsObj = {
    pokemon: () => PokemonApi.getTotalCount(),
  };

  const [pageLinks, setPageLinks] = useState([]);
  const [paginationSettings, setPaginationSettings] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const generatePageLinks = async (currentPage, numberOfPages) => {
    const pageLinksContent = [];
    const maxVisiblePages = paginationSettings.maxVisiblePages;
    const showFirstAndLastPages = paginationSettings.showFirstAndLastPages;

    if (showFirstAndLastPages) {
      const startPage = Math.max(
        2,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(
        numberOfPages - 1,
        startPage + maxVisiblePages - 1
      );

      pageLinksContent.push(createPageLink(1, currentPage));

      if (startPage > 2)
        pageLinksContent.push(
          <li key="prev-dots">
            <span>...</span>
          </li>
        );

      for (let i = startPage; i <= endPage; i++) {
        pageLinksContent.push(createPageLink(i, currentPage));
      }

      if (endPage < numberOfPages - 1)
        pageLinksContent.push(
          <li key="next-dots">
            <span>...</span>
          </li>
        );

      pageLinksContent.push(createPageLink(numberOfPages, currentPage));
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(numberOfPages, startPage + maxVisiblePages - 1);

      if (startPage > 2)
        pageLinksContent.push(
          <li key="prev-dots">
            <span>...</span>
          </li>
        );

      for (let i = startPage; i <= endPage; i++) {
        pageLinksContent.push(createPageLink(i, currentPage));
      }

      if (endPage < numberOfPages - 1)
        pageLinksContent.push(
          <li key="next-dots">
            <span>...</span>
          </li>
        );
    }

    return pageLinksContent;
  };

  const createPageLink = (page, currentPage) => (
    <li key={page}>
      <button
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? 'active' : ''}
      >
        {page}
      </button>
    </li>
  );

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  useEffect(() => {
    async function fetchPaginationSettings() {
      try {
        const settings = await BlogSettingsApi.getPaginationSettings();
        setPaginationSettings(settings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPaginationSettings();
  }, []);

  useEffect(() => {
    const generatePageLinksContent = async () => {
      if (!totalItemsObj[archiveType]) {
        console.error(`Invalid archiveType: ${archiveType}`);
        return;
      }

      const totalItems = await totalItemsObj[archiveType]();

      const itemsPerPage = paginationSettings.itemsPerPage;

      const numberOfPages = Math.ceil(totalItems / itemsPerPage);
      const currentPage = parseInt(searchParams.get('page')) || 1;

      const pageLinks = await generatePageLinks(currentPage, numberOfPages);

      setPageLinks(pageLinks);
    };
    if (!loading && paginationSettings.itemsPerPage) {
      generatePageLinksContent();
    }
  }, [searchParams, paginationSettings, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ul>{pageLinks}</ul>;
};

export default Pagination;
