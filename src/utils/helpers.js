import { format } from 'date-fns';

export const getCurrency = () => {
  let currency = 'USD'; //@todo null
  while (
    currency === null ||
    currency === '' ||
    !['USD', 'COP'].includes(currency.toUpperCase())
  ) {
    currency = prompt('Por favor, ingresa la moneda (USD o COP):');
  }
  return currency.toUpperCase();
};

export const getInitialLoan = () => {
  let initialLoan = 500; //@todo null
  while (initialLoan === null || isNaN(initialLoan) || initialLoan === '') {
    initialLoan = prompt('Por favor, ingresa el monto total del préstamo:');
  }
  return parseFloat(initialLoan);
};

export const getInitialDate = () => {
  return format(new Date(), 'PP');
};
