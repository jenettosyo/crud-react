import React, { useReducer } from "react";
import AppContexts from "../contexts/index";

//components
import Header from "./Header";
import Form from "./Form";
import reducer from "../reducers/index";

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <AppContexts.Provider value={{ state, dispatch }}>
        <Header />
        <Form />
      </AppContexts.Provider>
    </>
  );
}

export default App;
