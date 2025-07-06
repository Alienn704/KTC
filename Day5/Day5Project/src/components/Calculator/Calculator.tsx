import React, { useState } from "react";
import styles from "./Calculator.module.css";

const buttons = [
  "7",
  "8",
  "9",
  "÷",
  "4",
  "5",
  "6",
  "×",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "C",
  "+",
  "=",
];

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (value === "=") {
      try {
        const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/");

        const evalResult = eval(sanitized);

        if (
          evalResult === Infinity ||
          evalResult === -Infinity ||
          isNaN(evalResult)
        ) {
          setResult("Error");
        } else {
          setResult(evalResult.toString());
        }
      } catch {
        setResult("Error");
      }
      return;
    }

    // Prevent multiple dots in a number
    const lastNum = expression.split(/[+\-×÷]/).pop();
    if (value === "." && lastNum?.includes(".")) return;

    setExpression((prev) => prev + value);
    setResult("");
  };

  return (
    <div className={styles.calculator}>
      <input
        type="text"
        value={result || expression}
        readOnly
        className={styles.display}
      />
      <div className={styles.buttons}>
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`${styles.button} ${
              btn === "="
                ? styles.equal
                : btn === "C"
                ? styles.clear
                : isNaN(Number(btn)) && btn !== "."
                ? styles.operator
                : styles.number
            }`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
