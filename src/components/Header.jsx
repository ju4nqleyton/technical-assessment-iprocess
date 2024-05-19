import { useDispatch, useSelector } from 'react-redux';
import { setEdit } from '../redux/actions';
import { selectLoanData } from '../redux/selectors';

export default function Header() {
  const dispatch = useDispatch();
  const { currency, initialLoan, edit } = useSelector(selectLoanData);

  const handleEdit = () => {
    dispatch(setEdit());
  };

  return (
    <header className="mb-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">Pagos</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleEdit()}
          className={`rounded px-4 py-2 text-sm  ${edit ? 'bg-slate-200 text-gray-900 hover:bg-orange-500' : 'bg-orange-500  text-white hover:bg-orange-600'}`}
        >
          {edit ? 'Guardar' : 'Editar'}
        </button>
        <span className="text-gray-600">
          Por cobrar{' '}
          <span className="font-bold text-gray-900">
            {initialLoan} {currency}
          </span>
        </span>
      </div>
    </header>
  );
}
