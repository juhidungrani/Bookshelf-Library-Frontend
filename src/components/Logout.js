import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "./App2";

const Logout = () => {
  const { state, dispatch } = useContext(BooksContext);

  const history = useHistory();

  useEffect(() => {
    fetch("https://bookshelf-library-backend1.onrender.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/signin", { replace: true });
        if (res.status === !200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>You are Logged Out successfully!</h1>
    </>
  );
};
export default Logout;
