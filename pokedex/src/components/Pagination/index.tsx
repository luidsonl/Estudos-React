import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const [, setSearchParams] = useSearchParams()
    
    const updateCurrentPage = (page: number) => {
        setSearchParams({ page: page.toString() });
    };


  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => updateCurrentPage(currentPage - 1)}>Previous</button>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 2 && page <= currentPage + 2)
          ) {
            return (
              <li key={page}>
                <button
                  onClick={() => updateCurrentPage(page)}
                  className={page === currentPage ? 'active' : ''}
                >
                  {page}
                </button>
              </li>
            );
          } else if (
            (page === currentPage - 3 && currentPage > 4) ||
            (page === currentPage + 3 && currentPage < totalPages - 3)
          ) {
            return <li key={page}>...</li>;
          }
          return null;
        })}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => updateCurrentPage(currentPage + 1)}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
