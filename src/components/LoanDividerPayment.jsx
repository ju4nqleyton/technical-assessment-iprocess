/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectLoanData } from '../redux/selectors';

export default function LoanDividerPayment({ payment }) {
  const { currency } = useSelector(selectLoanData);

  return (
    <div className="flex h-48 w-48 flex-col items-center rounded-full bg-slate-100 p-4">
      <div className="mb-2 flex items-center justify-center">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${payment.status === 'PAID' ? 'bg-green-600' : 'border border-gray-900'}`}
        >
          <div className="h-10 w-10 rounded-full"></div>
        </div>
      </div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        Pago {payment.id}
      </h2>
      <p className="mb-2 text-gray-600">
        <strong>
          {payment.amount} {currency}
        </strong>{' '}
        (<small>{payment.percentage}%</small>)
      </p>
      <time className="text-gray-600">{payment.date}</time>
    </div>
  );
}
