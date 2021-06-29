import React from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPage,
  responseTasks,
  stateCurrentPage,
  statePages,
  stateTotalPages,
} from "../../../../store/reducers/tasksReducer";

const TasksPagination = styled(Pagination)`
  justify-content: center;
  margin-top: 4rem;
`;

const TaskPagination = () => {
  const pages = useSelector(statePages);
  const currentPage = useSelector(stateCurrentPage);
  const totalPages = useSelector(stateTotalPages);
  const dispatch = useDispatch();

  const changePage = (id) => {
    dispatch(responseTasks(id));
    dispatch(changeCurrentPage(id));
  };

  const handlerPages = (ev) => changePage(ev.target.id);
  const handlerPageNext = () => {
    let id = currentPage + 1;
    if (id >= pages.length) id = pages.length - 1;

    changePage(id);
  };
  const handlerPagePrev = () => {
    let id = currentPage - 1;
    if (id <= 0) id = 0;

    changePage(id);
  };
  const handlerPageFirst = () => changePage(0);
  const handlerPageLast = () => changePage(totalPages);

  return (
    <TasksPagination>
      <Pagination.First onClick={handlerPageFirst} />
      <Pagination.Prev onClick={handlerPagePrev} />
      {[...pages].map((page) => (
        <Pagination.Item
          onClick={handlerPages}
          className={page.id === currentPage ? "active" : ""}
          key={page.id}
          id={page.id}
        >
          {page.id + 1}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis disabled />
      <Pagination.Next onClick={handlerPageNext} />
      <Pagination.Last onClick={handlerPageLast} />
    </TasksPagination>
  );
};

export default TaskPagination;
