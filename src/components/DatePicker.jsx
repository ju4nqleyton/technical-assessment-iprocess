/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// Uso la libreria react-day-picker para poder seleccionar una fecha en el calendario. Me parecio una buena opcion ya que se complementa con la libreria de date-fns que ya estaba utilizando en el proyecto.

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
