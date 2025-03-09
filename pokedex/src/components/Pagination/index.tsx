import { useSearchParams } from "react-router-dom";
import UserConfigService from "../../services/UserConfigService";
import './style.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const [, setSearchParams] = useSearchParams()
    
    const updateCurrentPage = (page: number) => {
        setSearchParams({ page: page.toString() });
        window.scrollTo(0, 0);
    };

    const pageRange = UserConfigService.getPaginationRange();

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="pagination-arrow">
            <button onClick={() => updateCurrentPage(currentPage - 1)}>Previous</button>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - pageRange && page <= currentPage + pageRange)
          ) {
            return (
              <li key={page} className="pagination-item">
                <button
                  onClick={page !== currentPage ? () => updateCurrentPage(page) : undefined}
                  className={page === currentPage ? 'active' : ''}
                >
                  {page}
                </button>
              </li>
            );
          } else if (
            (page === currentPage - pageRange - 1 && currentPage > pageRange + 2) ||
            (page === currentPage + pageRange + 1 && currentPage < totalPages - pageRange - 1)
          ) {
            return <li key={page} className="pagination-item">...</li>;
          }
          return null;
        })}
        {currentPage < totalPages && (
          <li className="pagination-arrow">
            <button onClick={() => updateCurrentPage(currentPage + 1)}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;