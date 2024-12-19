import { useState } from "react";
import { useRecoilState } from "recoil";
import { minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event?.currentTarget.value); // by putting + will change the type of the value (string -> number)
  };

  return (
    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </>
  );
}

export default App;
