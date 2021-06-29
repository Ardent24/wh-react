import React from "react";
import { Form, Modal } from "react-bootstrap";
import CalendarCreatetask from "./calendar/CalendarCreateTask";
import PhasesCreateTask from "./phases/PhasesCreateTask";
import CurrentStatusCreateTask from "./currentStatus/CurrentStatusCreateTask";
import NameTaskCreateTask from "./estimation/EstimationCreateTask";
import EstimationCreateTask from "./nameTask/NameTaskCreateTask";

const CreateTaskBody = ({ register, errors, control }) => {
  return (
    <Modal.Body>
      <PhasesCreateTask register={register} />
      <Form.Row>
        <EstimationCreateTask register={register} errors={errors} />
        <NameTaskCreateTask register={register} errors={errors} />
      </Form.Row>
      <CalendarCreatetask control={control} />
      <CurrentStatusCreateTask register={register} />
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" {...register("descriptions")} />
      </Form.Group>
    </Modal.Body>
  );
};

export default CreateTaskBody;
