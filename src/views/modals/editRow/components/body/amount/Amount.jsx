import React from "react";
import { Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { stateTotalAmount } from "../../../../../../store/reducers/hourReducer";

const Amount = ({ dataRow, setDataRow }) => {
  const totalAmount = useSelector(stateTotalAmount);
  const [valid, setValid] = React.useState(false);
  const amount = dataRow.amount;

  const handlerValue = (ev) => {
    const val = +ev.target.value;

    setDataRow((prev) => ({
      ...prev,
      amount: val,
    }));

    if (val + totalAmount > 24) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <Form.Group as={Col}>
      <Form.Label>Amount</Form.Label>
      <Form.Control
        type="number"
        value={amount}
        onChange={handlerValue}
        isInvalid={valid}
      />
    </Form.Group>
  );
};

export default Amount;
