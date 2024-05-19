import { useSelector } from 'react-redux';
import { selectLoanData } from '../redux/selectors';

export default function Loan() {
  const { initialLoan, currency, initialPercentage, initialDate } =
    useSelector(selectLoanData);

  return (
    <div className="flex h-48 w-48 flex-col items-center rounded-full bg-slate-200 p-4">
      <div className="mb-2 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900">
          <div className="h-10 w-10 rounded-full"></div>
        </div>
      </div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Anticipo</h2>
      <p className="mb-2 text-gray-600">
        <strong>
          {initialLoan} {currency}
        </strong>{' '}
        (<small>{initialPercentage}%</small>)
      </p>
      <time className="text-gray-600">{initialDate}</time>
    </div>
  );
}
