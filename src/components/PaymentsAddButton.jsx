import { useDispatch } from 'react-redux';
import { addPayment } from '../redux/actions';

export default function PaymentsAddButton() {
  const dispatch = useDispatch();

  const handleAddPayment = () => {
    //@todo: api post para crear un pago
    dispatch(addPayment({}));
  };

  return (
    <div>
      <button
        onClick={handleAddPayment}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600"
      >
        +
      </button>
    </div>
  );
}
