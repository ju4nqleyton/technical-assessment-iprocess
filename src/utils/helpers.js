import { format } from 'date-fns';

// La idea en este archivo es poder tener toda la logica separada de los componentes.

export const getCurrency = () => {
  let currency = null;
  while (
    currency === null ||
    currency.trim() === '' ||
    !['USD', 'COP'].includes(currency.trim().toUpperCase())
  ) {
    currency = prompt('Por favor, ingresa la moneda (USD o COP):').trim();
  }
  return currency.trim().toUpperCase();
};

export const getInitialPayment = () => {
  let initialPayment = null;
  while (
    initialPayment === null ||
    isNaN(initialPayment) ||
    initialPayment === ''
  ) {
    initialPayment = prompt('Por favor, ingresa el monto total del préstamo:');
  }
  return parseFloat(initialPayment);
};

export const getDate = () => {
  return format(new Date(), 'PP');
};

export const getPercentage = (payments, initialPayment) => {
  const totalPaid = payments.reduce((acc, payment) => {
    return acc + payment.currentPayment;
  }, 0);

  return (totalPaid / initialPayment) * 100;
};

export const PAYMENT_ADVANCE = {
  id: 1,
  name: 'Ancipo',
  date: format(new Date(), 'PP'),
  percentage: 100,
  isPaid: false,
};

export const PAYMENT_BASE = {
  id: null,
  name: null,
  date: null,
  percentage: null,
  isPaid: false,
};

export const calculateNewPayment = (payments) => {
  const date = new Date();
  let newPayment = [
    ...payments,
    {
      ...PAYMENT_BASE,
      id: payments.length + 1,
      name: `Pago ${payments.length}`,
      date: format(date.setMonth(date.getMonth() + 1), 'PP'),
    },
  ];
  const totalPayments = newPayment.filter((payment) => !payment.isPaid).length;
  const totalPaymentsPercentage =
    newPayment
      .filter((payment) => payment.isPaid)
      .reduce((a, b) => {
        return a + b.percentage;
      }, 0) || 0;
  const percentage = (100 - totalPaymentsPercentage) / totalPayments;

  newPayment = newPayment.map((payment) => {
    if (payment.isPaid) {
      return payment;
    } else {
      return { ...payment, percentage };
    }
  });
  return newPayment;
};

export const updatePayment = (
  payments,
  payload,
  currentPayment,
  initialPayment,
) => {
  let paymentAmount = 0;
  const newPayment = payments.map((payment) => {
    if (payload.id === payment.id) {
      if (payload.payment.isPaid) {
        paymentAmount = (initialPayment * payment.percentage) / 100;
      }
      return payload.payment;
    } else {
      return payment;
    }
  });

  const allPayments = !newPayment.some((payment) => !payment.isPaid);
  const updatedCurrentPayment = currentPayment - paymentAmount;

  return {
    payments: newPayment,
    paid: allPayments,
    currentPayment: updatedCurrentPayment,
  };
};
