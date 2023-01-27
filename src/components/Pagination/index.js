import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Index = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          active={number === paginate}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Index;
