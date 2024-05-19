import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-8 py-24">
        <div className="text-center">
          <p className="text-base font-semibold text-orange-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            ¡Ups! Parece que te has perdido.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={'/'}
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Volver
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
