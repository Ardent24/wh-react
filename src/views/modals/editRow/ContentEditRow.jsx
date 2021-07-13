import React from "react";
import { Form, Modal, Row } from "react-bootstrap";
import EditRowHeader from "./components/header/EditRowHeader";
import EditRowFooter from "./components/footer/EditRowFooter";
import Description from "./components/body/description/Description";
import Amount from "./components/body/amount/Amount";
import Status from "./components/body/status/Status";
import Phases from "./components/body/phases/Phases";
import Tasks from "./components/body/tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import {
  responseHours,
  stateIdRow,
  stateRows,
} from "../../../store/reducers/hourReducer";
import {
  getPhaseFilteredTasksApi,
  getPhasesApi,
  updateHoursApi,
} from "../../../api/API";
import {
  handleModal,
  resetContentModal,
} from "../../../store/reducers/modalReducer";
import { stateDataNow } from "../../../store/reducers/calendarReducer";

const ContentEditRow = () => {
  const dispatch = useDispatch();
  const id = useSelector(stateIdRow);
  const rows = useSelector(stateRows);
  const date = useSelector(stateDataNow).date;
  const [dataRow, setDataRow] = React.useState(() => rows[id]);

  React.useEffect(() => {
    const phaseId = rows[id].phase.id;

    getPhaseFilteredTasksApi(phaseId).then((res) =>
      setDataRow((prev) => ({
        ...prev,
        tasks: res.data.data.items,
      }))
    );
    getPhasesApi().then((res) =>
      setDataRow((prev) => ({
        ...prev,
        phases: res.data.data.items,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const hour = {
      amount: dataRow.amount,
      comment: "IN_PROGRESS",
      user: `${dataRow.user.id}`,
      date,
      task: `${dataRow.task.id}`,
    };

    updateHoursApi(dataRow.id, { hour });

    dispatch(responseHours());

    dispatch(handleModal(false));
    dispatch(resetContentModal());
  };

  return (
    <Form onSubmit={onSubmit}>
      <EditRowHeader />
      <Modal.Body>
        <Row>
          <Phases dataRow={dataRow} setDataRow={setDataRow} />
          <Tasks dataRow={dataRow} setDataRow={setDataRow} />
        </Row>
        <Row>
          <Amount dataRow={dataRow} setDataRow={setDataRow} />
          <Status />
        </Row>
        <Description />
      </Modal.Body>
      <EditRowFooter />
    </Form>
  );
};

export default ContentEditRow;
