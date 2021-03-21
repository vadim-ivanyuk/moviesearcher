export const required = (value) => {
  if (value) return undefined;

  return "Обязательное поле";
};

export const minLength = (value) => {
  if (value.length > 5) return undefined;

  return "Должно быть минимум 5 значений, или больше";
};

export const indentPassword = (value, formState) => {
  if (formState.repeatPassword === formState.password) return undefined;

  return "Пароли не идентичны";
};
