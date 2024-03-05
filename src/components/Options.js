function Options({ question, answer, dispatch }) {
  const handleOpt = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              handleOpt
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={handleOpt}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
