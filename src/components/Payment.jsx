import { useSelector } from 'react-redux';
import { selectLoanData } from '../redux/selectors';
import Loan from './Loan';
import PaymentDividerButton from './PaymentDividerButton';

export default function Payment() {
  const { currency, initialLoan, initialDate, initialPercentage } =
    useSelector(selectLoanData);

  const loanData = {
    status: false,
    title: 'Anticipo',
    amount: initialLoan,
    currency,
    percentage: `${initialPercentage}%`,
    date: initialDate,
  };

  const paymentDividerButtonData = {
    text: 'Agregar Pago',
  };

  return (
    <div className="p-4">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Loan {...loanData} />
        <PaymentDividerButton {...paymentDividerButtonData} />
      </section>
    </div>
  );
}
