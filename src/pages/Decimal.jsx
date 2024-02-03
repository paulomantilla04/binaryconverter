import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import Container from "../components/Container";


const Binary = () => {
  const name = "<Paulo/>";
  const text = "{DECIMAL}";
  const textB = "{BINARIO}";
  let [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9.\s]/g, "");
    setInputValue(numericValue);
  };

  const handleClick = () => {
    const regexP = /\d+\.\d+/;
    if (regexP.test(inputValue)){
      const arr = inputValue.toString().split(".");
      let integerPart = parseInt(arr[0]);
      let decimalPart = parseFloat(arr[1]/100);
      let decArr = [];
      let i = 0;

      while (i < 16){
        let a = Math.floor(decimalPart);
        let b = decimalPart - a;
        let res = b * 2;
        let op = res.toFixed(3)[0];
        decArr.push(op);
        decimalPart = res;
        i++;
      }
      let result = `${integerPart.toString(2)}.${decArr.join("")}`;
      setValue(result)
    } else {
      let num = inputValue;
      let arr = [];
      while (num > 0.5){
        arr.push(parseInt(num%2));
        num/=2;
      }
      let res = arr.reverse().join("");
      setValue(res);
    }

  };

  return (
    <Container
      text={text}
      textB={textB}
      initValue={value}
      value={inputValue}
      onChange={handleChange}
      name={name}
    >
      <Button onClick={handleClick} text="Convertir"></Button>
    </Container>
  );
};

export default Binary;
