import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, minLength, indentPassword } from "../../utils/validate";
import { CustomField } from "../../elements/CustomField";

function AuthorizationForm(props) {
  const { handleSubmit } = props;

  const onSubmit = () => {};

  return (
    <>
      <p className="authorization-form-title">Авторизация</p>
      <form onSubmit={handleSubmit(onSubmit)} className="authorization-form">
        <Field
          name="login"
          component={CustomField}
          label="Логин"
          validate={[required, minLength]}
        />
        <Field
          name="password"
          type="password"
          component={CustomField}
          label="Пароль"
          validate={[required, minLength]}
        />
        <Field
          name="repeatPassword"
          type="password"
          component={CustomField}
          label="Повторите пароль"
          validate={[required, minLength, indentPassword]}
        />
        <button type="submit" className="btn btn-success w-100 mt-2 mb-3">
          Отправить
        </button>
      </form>
    </>
  );
}

AuthorizationForm = reduxForm({
  form: "AuthorizationForm",
})(AuthorizationForm);

export { AuthorizationForm };
