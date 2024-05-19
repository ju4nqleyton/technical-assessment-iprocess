import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function DatePicker() {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (selected) {
      console.log(format(selected, 'PP'));
    }
  }, [selected]);

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      modifiersClassNames={{
        selected: 'bg-orange-500',
      }}
    />
  );
}
