import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import Container from "../components/Container";


const Binary = () => {
  const name = "<Paulo/>";
  const text = "{BINARIO}";
  const textB = "{DECIMAL}";
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event) => {
    const numericValue = event.target.value.replace(/[^01\s]/g, "");
    setInputValue(numericValue);
  };

  const handleClick = () => {
    let num = inputValue.toString();
    const arr = num
    .split("")
    .reverse()
    .filter((element) => element.trim() !== "")
    .map((element) => parseInt(element));
    let acum = 0;

    for (let i = 0; i < arr.length; i++) {
      acum += arr[i] * Math.pow(2, i);
    }

    setValue(acum);
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
