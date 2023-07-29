import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";

type Props = {
  children: React.ReactNode;
  alerta: (conter: number) => void;
};

function Counter(props: Props) {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => props.alerta(counter), [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <Button clicked={() => setCounter(counter + 1)}>aumentar</Button>
      <Button clicked={() => setCounter(counter - 1)}>diminuir</Button>
    </>
  );
}

export { Counter };
