import { useSelector } from 'react-redux';
import Loan from './Loan';
import LoanDividerButton from './LoanDividerButton';
import LoanDividerPayment from './LoanDividerPayment';

export default function Payment() {
  const payments = useSelector((state) => state.payments);

  return (
    <div className="p-4">
      <section className="flex flex-row gap-4 overflow-x-auto">
        <div className="flex-shrink-0">
          <LoanDividerButton />
        </div>
        <div className="flex-shrink-0">
          <Loan />
        </div>
        {payments.map((payment, index) => (
          <div className="flex-shrink-0" key={index}>
            <LoanDividerPayment payment={payment} />
          </div>
        ))}
      </section>
    </div>
  );
}
