import { useDispatch, useSelector } from 'react-redux';
import { setEdit } from '../redux/actions';
import { selectLoanData } from '../redux/selectors';

// Cuando establezco la propiedad disabled en true, el botón se deshabilita y no se puede hacer click en él. Esto con el fin de que el usuario no pueda editar los pagos si ya están pagados.

export default function PaymentsHeader() {
  const dispatch = useDispatch();
  const { currency, currentPayment, edit, paid } = useSelector(selectLoanData);

  const handleEdit = () => {
    dispatch(setEdit());
  };

  return (
    <header className="mb-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">Pagos</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleEdit()}
          disabled={paid}
          className={`rounded px-4 py-2 text-sm  ${edit ? 'bg-slate-200 text-gray-900 hover:bg-orange-500' : 'bg-orange-500  text-white hover:bg-orange-600'}`}
        >
          {edit ? 'Guardar' : 'Editar'}
        </button>
        <span className="text-gray-600">
          Por cobrar{' '}
          <span className="font-bold text-gray-900">
            {currentPayment % 1 !== 0
              ? currentPayment.toFixed(1)
              : currentPayment}{' '}
            {currency}
          </span>
        </span>
      </div>
    </header>
  );
}
