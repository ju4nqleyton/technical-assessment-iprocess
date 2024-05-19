import { useDispatch, useSelector } from 'react-redux';
import { addPayment } from '../redux/actions';

export default function LoanDividerButton() {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);

  const handleAddPayment = () => {
    const payment = {
      id: payments.length + 1,
      status: 'PENDING',
      amount: 0,
      percentage: 0,
      date: null,
    };

    dispatch(addPayment(payment));
  };

  return (
    <button
      onClick={handleAddPayment}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-700 text-white hover:bg-orange-600"
    >
      +
    </button>
  );
}
