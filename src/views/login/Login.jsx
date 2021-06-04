import React from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { signInApi } from "../../api/authorizationAPI";
import { firstSetAuth } from "../../store/reducers/authReducer";

import img from "../../assets/img/logo.png";
import "./styles/login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const history = useHistory();

  const [errorResponse, setErrorResponse] = React.useState(false);

  const alertClass =
    "fade alert-danger mt-4 text-center authorization-form__error";
  const dangerShowPass = cx("text-danger fade", { show: errors.password });
  const dangerShowEmail = cx("text-danger fade", { show: errors.username });
  const alertShow = cx(alertClass, { active: errorResponse });

  const onSubmit = (data) => {
    signInApi(data)
      .then((res) => {
        dispatch(firstSetAuth(res.data.data));
        history.push("/calendar");
      })
      .catch(() => setErrorResponse(true));
  };

  return (
    <Form className="authorization-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="authorization-form__box">
        <img src={img} className="authorization-form__img" alt="logo" />
        <Form.Group controlId="formBasicEmail" className="mb-0">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            className=""
            {...register("username", {
              required: true,
              // pattern: { value: /\S+@\S+\.\S+/ },
            })}
          />
          <Form.Text className={dangerShowEmail}>
            Entered value does not match email format
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-0">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            className=""
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
              },
            })}
          />
          <Form.Text className={dangerShowPass}>
            Вы ввели слишком мало символов
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mt-4 btn-lg btn-block"
          disabled={!isDirty || !isValid}
        >
          Sign In
        </Button>
        <Alert className={alertShow}>
          Введена неправельная почта или адрес
        </Alert>
      </div>
    </Form>
  );
};

export default Login;
