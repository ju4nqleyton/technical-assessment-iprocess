import logo from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 flex h-16 items-center justify-center bg-black text-white">
      <img src={logo} alt="Logo" className="mr-4 h-12 w-auto" />
      <p className="px-4 text-xs">
        Prueba tecnica elaborada por: Juan Quintero.
      </p>
    </footer>
  );
}
