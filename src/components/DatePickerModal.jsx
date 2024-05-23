/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'flowbite-react';
import { format, isBefore, startOfDay } from 'date-fns';
import DatePicker from './DatePicker';
import { updatePayment } from '../redux/actions';

// Realizo importaciones de funciones de date-fns para poder trabajar con fechas, de ahi la eleccion de la libreria react-day-picker para poder seleccionar una fecha en el calendario.

export function DatePickerModal({ payment }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const setDate = (date) => {
    const today = startOfDay(new Date());

    if (isBefore(date, today)) {
      alert('No puedes seleccionar una fecha anterior a hoy');
      return;
    }
    //@todo: api put para actualizar la fecha de un pago
    dispatch(updatePayment({ id: payment.id, payment: { ...payment, date } }));
  };
  return (
    <>
      <div
        className="mt-2 cursor-pointer text-xs text-gray-600"
        onClick={() => setOpenModal(true)}
      >
        📅{format(payment.date, 'dd/MM/yyyy')}
      </div>
      <div className="">
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="rounded-lg bg-white shadow-lg"
          size={'sm'}
        >
          <Modal.Body>
            <div className="space-y-6">
              <DatePicker selected={payment.date} setDate={setDate} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-orange-500 enabled:hover:bg-orange-600"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
              onClick={() => setOpenModal(false)}
            >
              Aceptar
            </Button>
            <Button
              className="bg-slate-200 text-gray-900 hover:text-white enabled:hover:bg-red-600"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
              onClick={() => setOpenModal(false)}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
