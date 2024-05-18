import Header from './Header';
import Loan from './Loan';
import PaymentDividerButton from './PaymentDividerButton';

export default function Payment() {
  const headerData = {
    buttonText: 'Editar',
    amount: '182',
    currency: 'USD',
  };

  const loanData = {
    status: false,
    title: 'Anticipo',
    amount: '182',
    currency: 'USD',
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
