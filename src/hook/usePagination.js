import { useState } from 'react';

const usePagination = ({ itemsPerPage, data, startFrom }) => {
    // console.log('data', data, startFrom, itemsPerPage);
  const perPage = itemsPerPage ? itemsPerPage : 10;
  const pages = Math.ceil(data.length / perPage);
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(startFrom <= pages ? startFrom : 1);
//   console.log('currentPage:::', currentPage);
  
  const slicedDataTemp = [...data].slice((currentPage - 1) * perPage, currentPage * perPage);
//   console.log('slicedDataTemp', slicedDataTemp);
//   console.log(JSON.stringify(slicedDataTemp));
  const [slicedData, setSlicedData] = useState(slicedDataTemp);
//   console.log('slicedData ANTES 0-----', slicedData);

  let ellipsisLeft = false;
  let ellipsisRight = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, ellipsis: false });
    } else {
      if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
        pagination.push({ id: i, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }

  const changePage = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setSlicedData([...data].slice((page - 1) * perPage, page * perPage));
    }
  };

  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      setSlicedData([...data].slice((currentPage - 2) * perPage, (currentPage - 1) * perPage));
    }
  };

  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      setSlicedData([...data].slice(currentPage * perPage, (currentPage + 1) * perPage));
    }
  };

//   console.log('slicedData ANTES', slicedData);
  return {
    slicedData,
    slicedDataTemp,
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage,
  };
};

export default usePagination;
