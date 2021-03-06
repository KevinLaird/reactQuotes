import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";

const QuoteAdd = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    history.push("/quotes");
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default QuoteAdd;
