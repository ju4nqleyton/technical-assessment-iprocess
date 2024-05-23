import { useSelector } from 'react-redux';
import PaymentsAddButton from './PaymentsAddButton';
import PaymentsDetails from './PaymentsDetails';
import { selectLoanData } from '../redux/selectors';

export default function Payments() {
  const { paid, payments } = useSelector(selectLoanData);

  const renderPayments = () =>
    payments.map((payment, index) => (
      <div className="flex-shrink-0" key={index}>
        <PaymentsDetails payment={payment} />
      </div>
    ));

  const renderAddButton = () => !paid && <PaymentsAddButton />;

  return (
    <div className="p-4">
      <section className="flex flex-row gap-4 overflow-x-auto">
        {renderPayments()}
        <div className="flex-shrink-0 pt-4">{renderAddButton()}</div>
      </section>
    </div>
  );
}
