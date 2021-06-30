import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";
import { Form, Table } from "react-bootstrap";
import HoursFooter from "./components/footer/HoursFooter";
import HoursHeader from "./components/header/HoursHeader";
import HoursRowList from "./components/main/HoursRowList";
import { stateDataNow } from "../../store/reducers/calendarReducer";
import {responseHours, stateHours} from "../../store/reducers/hourReducer";

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Title = styled.h2`
  color: #084298;
  margin-bottom: 2rem;
`;

const Hours = () => {
  const hours = useSelector(stateHours);
  const dispatch = useDispatch();

  const date = useSelector(stateDataNow).date;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const onSubmit = (data) => {
    const obj = data.items;

    for (let item of obj) {
      item.amount = +item.amount;
    }

    console.log(obj);
  };

  React.useEffect(() => {
    dispatch(responseHours());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    reset({ items: [...hours] });
  }, [hours, reset]);

  return (
    <Wrapper>
      <Title>Save Hours For {date}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Table striped bordered>
          <HoursHeader />
          <tbody>
            <HoursRowList
              register={register}
              errors={errors}
              fields={fields}
              remove={remove}
              control={control}
            />
          </tbody>
        </Table>
        <HoursFooter append={append} />
      </Form>
    </Wrapper>
  );
};

export default Hours;
