/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function DatePicker(props) {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (selected) {
      props.setDate(selected);
    }
  }, [selected]);

  return (
    <DayPicker
      mode="single"
      selected={props.selected}
      onSelect={setSelected}
      modifiersClassNames={{
        selected: 'bg-orange-500',
      }}
    />
  );
}
