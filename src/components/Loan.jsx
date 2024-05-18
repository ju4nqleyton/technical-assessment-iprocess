export default function Loan({
  status,
  title,
  amount,
  currency,
  percentage,
  date,
}) {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      <div className="mb-2 flex items-center justify-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${status ? 'bg-green-600' : 'border border-gray-900'}`}
        >
          <div className="h-6 w-6 rounded-full"></div>
        </div>
      </div>
      <h2 className="mb-2 text-lg font-bold text-gray-900">{title}</h2>
      <p className="mb-2 text-gray-600">
        {amount} {currency} ({percentage})
      </p>
      <time className="text-gray-600">{date}</time>
    </div>
  );
}
