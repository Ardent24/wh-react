import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { statePhases } from "../../../../../store/reducers/tasksReducer";
import { responseFilteredTasks } from "../../../../../store/reducers/hourReducer";
import { useWatch } from "react-hook-form";

const HoursRowPhases = ({ register, phase, index, control }) => {
  const dispatch = useDispatch();
  const phases = useSelector(statePhases);

  const watchPhases = useWatch({
    control,
    name: `items[${index}].phase`,
  });

  React.useEffect(() => {
    if (typeof watchPhases === "object") {
      const id = watchPhases.id;

      dispatch(responseFilteredTasks({ index, id }));
    }
    if (typeof watchPhases === "string") {
      const id = +watchPhases;

      dispatch(responseFilteredTasks({ index, id }));
    }
  }, [dispatch, index, watchPhases]);

  return (
    <Form.Control
      as="select"
      ref={register}
      {...register(`items[${index}].phase`, {
        required: true,
      })}
      defaultValue={phase?.name}
    >
      {phase && <option value={phase?.id}>{phase?.name}</option>}
      {phases.map(
        (item) =>
          item.name !== phase?.name && (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          )
      )}
    </Form.Control>
  );
};

export default HoursRowPhases;
