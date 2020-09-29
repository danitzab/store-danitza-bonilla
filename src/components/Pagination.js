import React from 'react';

const Pagination = ({ pagination, prevPage, nextPage, changePage }) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <span className="page-link" aria-label="Previous" onClick={prevPage}>
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>

          {pagination.map((page) => {
            if (!page.ellipsis) {
              return (
                <li key={page.id}>
                  <span className={page.current ? 'page-link is-current' : 'page-link'} onClick={(e) => changePage(page.id, e)}>
                    {page.id}
                  </span>
                </li>
              );
            } else {
              return (
                <li key={page.id}>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
              );
            }
          })}

          <li className="page-item">
            <span className="page-link" aria-label="Next" onClick={nextPage}>
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
