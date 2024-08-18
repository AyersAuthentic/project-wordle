import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          id="guess-input"
          type="text"
        />
      </form>
    </div>
  );
}

export default GuessInput;
