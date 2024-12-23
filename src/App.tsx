import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // by putting + will change the type of the value (string -> number)
  };

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
    </>
  );
}

export default App;
