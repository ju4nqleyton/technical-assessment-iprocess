import { useSelector } from 'react-redux';
import Header from './Header';
import Loan from './Loan';
import PaymentDividerButton from './PaymentDividerButton';
import { selectLoanData } from '../redux/selectors';

export default function Payment() {
  const { initialLoan, currency } = useSelector(selectLoanData);

  const headerData = {
    buttonText: 'Editar',
    amount: initialLoan,
    currency,
  };

  const loanData = {
    status: false,
    title: 'Anticipo',
    amount: initialLoan,
    currency,
    percentage: '100%',
    date: '22 Ene, 2022',
  };

  const paymentDividerButtonData = {
    text: 'Agregar Pago',
  };

  return (
    <div className="p-4">
      <Header {...headerData} />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Loan {...loanData} />
        <PaymentDividerButton {...paymentDividerButtonData} />
      </section>
    </div>
  );
}
