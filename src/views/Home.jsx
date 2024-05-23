import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialValue } from '../redux/actions';
import { getCurrency, getInitialPayment, getDate } from '../utils/helpers';
import PaymentsHeader from '../components/PaymentsHeader';
import Payments from '../components/Payments';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currency = getCurrency();
    const initialPayment = getInitialPayment();
    const date = getDate();
    dispatch(setInitialValue(currency, initialPayment, date)); //@todo: api get para obtener la información
  }, [dispatch]);

  return (
    <div className="flex h-screen items-start justify-center pt-32">
      <div className="w-1/2">
        <PaymentsHeader />
        <Payments />
      </div>
    </div>
  );
}
