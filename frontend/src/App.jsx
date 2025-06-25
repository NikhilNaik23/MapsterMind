import React, { useState, useEffect } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [capital, setCapital] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const fetchQuestion = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/quiz/random");
      const data = await res.json();
      setQuestion(data.country);
      setCapital(data.capital);
      setAnswer("");
      setResult("");
      setAnswered(false);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const checkAnswer = () => {
    if (answered) return;
    setAnswered(true);

    if (answer.trim().toLowerCase() === capital.toLowerCase()) {
      setResult("✅ Correct!");
      setScore((prev) => prev + 1);
    } else {
      setResult(`❌ Incorrect! The capital is ${capital}.`);
      setScore((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center p-6">

      <div className="absolute right-5 top-5 p-2 bg-white text-gray-800 rounded-md shadow-md font-semibold">
        Score: {score}
      </div>

      <div className="bg-gray-950 border border-gray-700 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          🌍 MapsterMind
        </h2>

        <p className="text-white text-xl mb-4">
          Which is the capital of:{" "}
          <span className="font-semibold text-yellow-300">{question}</span>?
        </p>

        <div className="mb-4">
          <input
            id="answer"
            className="w-full border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={answered}
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={checkAnswer}
            disabled={answered}
            className={`${
              answered
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            } text-white font-semibold py-2 px-5 rounded-xl transition-all duration-200`}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={fetchQuestion}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-200"
          >
            Next
          </button>
        </div>

        <p
          className={`mt-5 text-lg font-medium ${
            result.startsWith("✅")
              ? "text-green-400"
              : result.startsWith("❌")
              ? "text-red-400"
              : "text-white"
          }`}
        >
          {result}
        </p>
      </div>
    </div>
  );
};

export default App;
