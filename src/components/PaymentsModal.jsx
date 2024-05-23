/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { selectLoanData } from '../redux/selectors';
import { updatePayment } from '../redux/actions';

// Insertar un modal me parece la opcion mas viable para que el usuario sepa que esta en una ventana que permite hacer un pago.
// Aqui tambien establezco si es posible hacer un pago o no, si el pago anterior no ha sido pagado, no se puede hacer un pago. Y para esto nuevamente uso el recurso del disabled, con el fin de que el usuario no pueda hacer click en el botón cuando no se pueda hacer un pago.

export function PaymentsModal({ payment }) {
  const dispatch = useDispatch();
  const { payments } = useSelector(selectLoanData);
  const [openModal, setOpenModal] = useState(payments.edit);
  const [selectedOption, setSelectedOption] = useState('efectivo');

  const payPayment = () => {
    //@todo: api put para hacer un pago
    dispatch(
      updatePayment({
        id: payment.id,
        payment: {
          ...payment,
          isPaid: true,
          paymentMethod: selectedOption,
          date: format(new Date(), 'PP'),
        },
      }),
    );
  };

  const handleAdvancePayment = () => {
    payPayment();
    setOpenModal(false);
  };

  const canMakePayment = () => {
    return (
      payment.id === 1 ||
      payments.find((previousPayment) => previousPayment.id === payment.id - 1)
        .isPaid
    );
  };

  useEffect(() => {
    setOpenModal(payments.edit);
  }, [payments.edit]);

  return (
    <>
      <div
        className={`flex items-center justify-center rounded ${payment.isPaid ? 'bg-green-600' : ' bg-gray-600'}`}
      >
        <Button
          onClick={() =>
            !payment.isPaid && canMakePayment() ? setOpenModal(true) : null
          }
          style={{
            cursor: payment.isPaid ? 'default' : 'pointer',
            backgroundColor: 'inherit',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}
          disabled={!canMakePayment()}
        >
          💰
        </Button>
      </div>
      <Modal
        show={openModal}
        size="sm"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-600">
              Selecciona un método de pago:
              <select
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600"
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
              </select>
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-orange-500 enabled:hover:bg-orange-600"
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                onClick={() => {
                  setOpenModal(false);
                  handleAdvancePayment();
                }}
              >
                Si
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
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
