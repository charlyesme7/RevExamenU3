import React, { createContext, useState } from "react";
export const quotesContext = createContext();

const QuotesProvider = (props) => {
  const [cita, setQuotes] = useState([{}]);
  const zenquotes = (Cita) => {
    const api_url = `https://zenquotes.io/api/${Cita}`;
    async function getapi(url) {
      const response = await fetch(url);
      var array = await response.json();
      setQuotes(array);
    }
    getapi(api_url);
  };
  return (
    <quotesContext.Provider value={{cita, zenquotes}}>
      {props.children}
    </quotesContext.Provider>
  );
};
export default QuotesProvider;