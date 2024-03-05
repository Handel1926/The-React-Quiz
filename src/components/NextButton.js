function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  const finish = index + 1 !== numQuestions;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        finish
          ? dispatch({ type: "nextQuestion" })
          : dispatch({ type: "finished" })
      }
    >
      {finish ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
