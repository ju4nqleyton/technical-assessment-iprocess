/*
Debido a que no tengo una API para obtener la información, he decidido solicitar al usuario los valores necesarios
utilizando el método 'prompt'. Posteriormente, procedo a guardar los datos en el store de Redux utilizando la
función 'saveValue' de las acciones de Redux.
*/

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveValue } from '../redux/actions';
import Payment from '../components/Payment';

export default function Home() {
  const dispatch = useDispatch();

  const getInitialLoan = () => {
    let initialLoan = null;
    while (initialLoan === null || isNaN(initialLoan) || initialLoan === '') {
      initialLoan = prompt('Por favor, ingresa el monto total del préstamo:');
    }
    return parseFloat(initialLoan);
  };

  const getCurrency = () => {
    let currency = null;
    while (
      currency === null ||
      currency === '' ||
      !['USD', 'COP'].includes(currency.toUpperCase())
    ) {
      currency = prompt('Por favor, ingresa la moneda (USD o COP):');
    }
    return currency.toUpperCase();
  };

  useEffect(() => {
    const initialLoan = getInitialLoan();
    const currency = getCurrency();
    dispatch(saveValue(initialLoan, currency)); //@todo: api get para obtener la información
  }, [dispatch]);

  return <Payment />;
}
