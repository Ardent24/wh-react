import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateDataNow } from "../../../store/reducers/calendarReducer";
import { Form, Modal, Row } from "react-bootstrap";
import Description from "../editRow/components/body/description/Description";
import CreateRowFooter from "./components/footer/CreateRowFooter";
import CreateRowHeader from "./components/header/CreateRowHeader";
import CreateRowAmount from "./components/body/amount/CreateRowAmount";
import CreateRowStatus from "./components/body/status/CreateRowStatus";
import CreateRowPhases from "./components/body/phases/CreateRowPhases";
import CreateRowTasks from "./components/body/tasks/CreateRowTasks";
import { stateIdUsers } from "../../../store/reducers/authReducer";
import { addHoursApi, getNowTasksApi, getPhasesApi } from "../../../api/API";
import { responseHours } from "../../../store/reducers/hourReducer";
import {
  handleModal,
  resetContentModal,
} from "../../../store/reducers/modalReducer";

const ContentCreateRow = () => {
  const dispatch = useDispatch();
  const date = useSelector(stateDataNow).date;
  const idUser = useSelector(stateIdUsers);
  const [dataRow, setDataRow] = React.useState({
    amount: 0,
    comment: "",
    status: "IN_PROGRESS",
    user: String(idUser),
    date,
    task: "",
  });

  React.useEffect(() => {
    let phaseId = 0;

    const promises = async () => {
      // eslint-disable-next-line no-unused-vars
      const phases = await getPhasesApi().then((res) => {
        const firstPhase = res.data.data.items[0];
        phaseId = firstPhase.id;

        setDataRow((prev) => ({
          ...prev,
          phases: res.data.data.items,
          phase: firstPhase,
        }));
      });
      // eslint-disable-next-line no-unused-vars
      const tasks = await getNowTasksApi(phaseId, date).then((res) => {
        const firstTask = res.data.data.items[0];

        setDataRow((prev) => ({
          ...prev,
          tasks: res.data.data.items,
          task: firstTask,
        }));
      });
    };

    promises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const hour = {
      amount: dataRow.amount,
      comment: "IN_PROGRESS",
      user: `${idUser}`,
      date,
      task: `${dataRow.task.id}`,
    };

    await addHoursApi({ hour });
    await dispatch(responseHours());

    dispatch(handleModal(false));
    dispatch(resetContentModal());
  };

  return (
    <Form onSubmit={onSubmit}>
      <CreateRowHeader />
      <Modal.Body>
        <Row>
          <CreateRowPhases dataRow={dataRow} setDataRow={setDataRow} />
          <CreateRowTasks dataRow={dataRow} setDataRow={setDataRow} />
        </Row>
        <Row>
          <CreateRowAmount dataRow={dataRow} setDataRow={setDataRow} />
          <CreateRowStatus />
        </Row>
        <Description />
      </Modal.Body>
      <CreateRowFooter />
    </Form>
  );
};

export default ContentCreateRow;
