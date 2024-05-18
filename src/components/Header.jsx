export default function Header({ buttonText, amount, currency }) {
  return (
    <header className="mb-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">Pagos</h1>
      <div className="flex space-x-4">
        <button className="rounded bg-orange-700 px-4 py-2 text-white hover:bg-orange-600">
          {buttonText}
        </button>
        <span className="text-gray-600">
          Por cobrar {amount} {currency}
        </span>
      </div>
    </header>
  );
}
