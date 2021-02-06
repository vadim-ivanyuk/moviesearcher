import React, { useState } from "react";
import { AuthorizationModal } from "./AuthorizationModal";

export const Authorization = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="authorization">
        <button onClick={toggle} className="btn btn-outline-warning mr-2">
          Войти
        </button>
        <AuthorizationModal modal={modal} toggle={toggle} />
      </div>
      <button className="btn btn-outline-warning">
        <a
          href="https://www.themoviedb.org/signup"
          rel="nofollow"
          target="blank"
        >
          Регистрация
        </a>
      </button>
    </>
  );
};
