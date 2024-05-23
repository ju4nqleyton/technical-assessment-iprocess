import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialValue } from '../redux/actions';
import { getCurrency, getInitialPayment, getDate } from '../utils/helpers';
import PaymentsHeader from '../components/PaymentsHeader';
import Payments from '../components/Payments';
import FooterBar from '../components/Footer';

// Inicio preguntando al usuario por la moneda y el pago inicial, esto con el fin de almacenar la información en el estado global de la aplicación.
// Decido impotar las funciones getCurrency, getInitialPayment y getDate del archivo helpers.js con el fin de tener todo mas legible y ordenado.

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
        <FooterBar />
      </div>
    </div>
  );
}
