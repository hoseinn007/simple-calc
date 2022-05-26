import { useState } from "react";
import "./App.scss";
import Indicator from "./components/Indicator";
import KeypadWrapper from "./components/KeypadWrapper";

const App = () => {
  const [input, setInput] = useState<string>("0");

  const calculate = () => {
    const splitedInput = input.split(" ");
    let result = Number(splitedInput[0]);
    splitedInput.forEach((item: string | number, index: number) => {
      switch (item) {
        case "*":
          result *= Number(splitedInput[2]);
          return;
        case "+":
          result += Number(splitedInput[2]);
          return;
        case "-":
          result -= Number(splitedInput[2]);
          return;
        case "/":
          result /= Number(splitedInput[2]);
          return;
        case "%":
          result %= Number(splitedInput[2]);
          return;
      }
    });
    return result;
  };

  const onSelectHandler = (pushedButton: string | number) => {
    if (pushedButton === " = ") {
      const res = calculate();
      setInput(res + "");
      return;
    }
    if (pushedButton === " C ") return setInput("0");

    const splitedInput = input.split(" ");
    if (splitedInput[2] === "" && pushedButton === 0) return;
    // @ts-ignore
    if (isNaN(pushedButton) && splitedInput.length > 2) {
      const res = calculate();
      return setInput(res + "" + pushedButton);
    }

    setInput((prevInput: string) => {
      if (prevInput === "0" && pushedButton === " - ") return "-";
      if (prevInput === "0") return pushedButton + "";

      return prevInput + pushedButton;
    });
  };

  return (
    <div className="test">
      <Indicator data={input} />
      <KeypadWrapper onSelect={onSelectHandler} onOperator={onSelectHandler} />
    </div>
  );
};

export default App;
