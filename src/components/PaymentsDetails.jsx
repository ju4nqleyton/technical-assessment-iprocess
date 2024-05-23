/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { selectLoanData } from '../redux/selectors';
import { DatePickerModal } from './DatePickerModal';
import { PaymentsModal } from './PaymentsModal';

// Empiezo a pensar la logica de como tengo que pagar, en este caso decido mostrar el monto a pagar y el porcentaje que representa del total.

export default function PaymentsDetails({ payment }) {
  const { currency, initialPayment, edit } = useSelector(selectLoanData);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [showModalDatePicker, setShowModalDatePicker] = useState(false);

  useEffect(() => {
    setShowModalDatePicker(edit);
    setShowModalPayment(edit);
  }, [edit]);

  const renderPaymentAmount = () => {
    const calculatedAmount = (initialPayment * payment.percentage) / 100;
    const formattedAmount = Number.isInteger(calculatedAmount)
      ? calculatedAmount
      : calculatedAmount.toFixed(1);
    const formattedPercentage = Number.isInteger(payment.percentage)
      ? payment.percentage
      : payment.percentage.toFixed(1);

    return (
      <p className="mb-2 text-gray-600">
        <strong>
          {formattedAmount} {currency}
        </strong>
        (<small>{formattedPercentage}%</small>)
      </p>
    );
  };

  const renderEditControls = () => (
    <div className="flex flex-row items-center">
      <button
        className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600"
        onClick={() => {}}
      >
        -
      </button>
      <input
        type="number"
        value={payment.percentage}
        onChange={() => {}}
        className="ml-4 mr-4 h-10 w-20 text-center text-gray-900"
      />
      <button
        className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600"
        onClick={() => {}}
      >
        +
      </button>
    </div>
  );

  return (
    <div className="flex h-48 w-48 flex-col items-center rounded-md bg-slate-300 p-4">
      <div className="mb-2 flex items-center justify-center">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full`}
        >
          <div
            className={`h-10 w-10 rounded-full ${payment.isPaid ? 'bg-green-600' : ' border-gray-900'}`}
          ></div>
          <PaymentsModal payment={payment} />
        </div>
      </div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">{payment.name}</h2>
      {!edit && renderPaymentAmount()}
      {edit && renderEditControls()}
      {payment.isPaid && (
        <p className="text-center text-xs text-green-600">
          Pagado el {format(payment.date, 'PP')} con {payment.paymentMethod}
        </p>
      )}
      {!edit && !payment.isPaid && (
        <time className="text-gray-600">{format(payment.date, 'PP')}</time>
      )}
      {showModalDatePicker && !payment.isPaid && (
        <DatePickerModal payment={payment}></DatePickerModal>
      )}
    </div>
  );
}
