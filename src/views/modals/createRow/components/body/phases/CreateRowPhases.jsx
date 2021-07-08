import React from "react";
import { Col, Form } from "react-bootstrap";
import { findIndexArray } from "../../../../../../modules/filtres";
import { getNowTasksApi } from "../../../../../../api/API";
import { useSelector } from "react-redux";
import { stateDataNow } from "../../../../../../store/reducers/calendarReducer";

const CreateRowPhases = ({ dataRow, setDataRow }) => {
  const date = useSelector(stateDataNow).date;
  const id = dataRow?.phase?.id;
  const rowPhases = dataRow.phases;

  const handlerValue = (ev) => {
    const id = Number(ev.target.value);
    const findIndex = findIndexArray(rowPhases, id);
    const phase = rowPhases[findIndex];

    setDataRow((prev) => ({
      ...prev,
      phase,
    }));

    getNowTasksApi(id, date).then((res) => {
      setDataRow((prev) => ({
        ...prev,
        tasks: res.data.data.items,
      }));
    });
  };

  return (
    <Form.Group as={Col}>
      <Form.Label>Phase</Form.Label>
      <Form.Control as="select" value={id} onChange={handlerValue}>
        {rowPhases &&
          rowPhases.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CreateRowPhases;
