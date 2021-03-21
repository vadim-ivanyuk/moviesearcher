import React, { Fragment, useState } from "react";
import { AuthorizationModal } from "./AuthorizationModal";
import { AuthButton, AuthButtonLink } from "./Authorization.style";

export const Authorization = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Fragment>
        <AuthButton right onClick={toggle}>
          Войти
        </AuthButton>
        <AuthorizationModal modal={modal} toggle={toggle} />
      </Fragment>
      <AuthButton>
        <AuthButtonLink
          href="https://www.themoviedb.org/signup"
          rel="nofollow"
          target="blank"
        >
          Регистрация
        </AuthButtonLink>
      </AuthButton>
    </Fragment>
  );
};
