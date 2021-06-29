import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";
import { Form, Table } from "react-bootstrap";
import HoursFooter from "./components/footer/HoursFooter";
import HoursHeader from "./components/header/HoursHeader";
import HoursRowList from "./components/main/HoursRowList";
import { stateDataNow } from "../../store/reducers/calendarReducer";
import { responseHours, stateHours } from "../../store/reducers/hourReducer";
import { getHoursApi } from "../../api/API";

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Title = styled.h2`
  color: #084298;
  margin-bottom: 2rem;
`;

const Hours = () => {
  //const hours = useSelector(stateHours);
  const dispatch = useDispatch();

  const a = {amount: 111}

  const [bb, setBB] = React.useState({});

  React.useEffect(() => {
    getHoursApi().then((r) => setBB(r.data.data.items));
    if (!bb) {
      //setBB(responseHours())
    }

    // dispatch(responseHours());
  }, []);
  console.log();

  //console.log(hours[0]?.amount);

  const date = useSelector(stateDataNow).date;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      //items: [{ ...(bb && { amount: bb[0]?.amount }) }],
      items:[{amount: a.amount}]
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
            />
          </tbody>
        </Table>

        {/*{fields.map(({ id, name, type, amount }, index) => {*/}
        {/*  return (*/}
        {/*    <div key={id}>*/}
        {/*      <input {...register(`items[${index}].name`)} />*/}

        {/*      <button type="button" onClick={() => remove(index)}>*/}
        {/*        Remove*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
        <HoursFooter append={append} />
      </Form>

      {/*<Form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  <Table striped bordered>*/}
      {/*    <HoursHeader />*/}
      {/*    <tbody>*/}
      {/*      <HoursRowList register={register} errors={errors} />*/}
      {/*    </tbody>*/}
      {/*  </Table>*/}
      {/*  <HoursFooter />*/}
      {/*</Form>*/}
    </Wrapper>
  );
};

export default Hours;
