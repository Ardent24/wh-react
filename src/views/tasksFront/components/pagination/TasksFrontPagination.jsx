import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";
import {
  changeCurrentPage,
  isSummPages,
  stateCurrentPage,
  statePages,
  stateTotalPages,
} from "../../../../store/reducers/tasksReducer";

const TasksFrontPagination = styled(Pagination)`
  justify-content: center;
  margin-top: 4rem;
`;

const TaskFrontPagination = () => {
  const pages = useSelector(statePages);
  const currentPage = useSelector(stateCurrentPage);
  const totalPages = useSelector(stateTotalPages);
  const dispatch = useDispatch();

  const changePage = (id) => {
    dispatch(changeCurrentPage(id));
    dispatch(isSummPages());
  };

  const handlerPages = (ev) => changePage(ev.target.id);
  const handlerPageNext = () => {
    let id = currentPage + 1;
    if (id === totalPages) id = totalPages - 1;

    changePage(id);
  };
  const handlerPagePrev = () => {
    let id = currentPage - 1;
    if (id <= 0) id = 0;

    changePage(id);
  };
  const handlerPageFirst = () => changePage(0);
  const handlerPageLast = () => changePage(totalPages - 1);

  return (
    <TasksFrontPagination>
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
    </TasksFrontPagination>
  );
};

export default TaskFrontPagination;
