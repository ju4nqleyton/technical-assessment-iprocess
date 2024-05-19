import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLoanData } from '../redux/selectors';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export function ModalPayment() {
  const { payments } = useSelector(selectLoanData);
  const [openModal, setOpenModal] = useState(payments.edit);

  useEffect(() => {
    setOpenModal(payments.edit);
  }, [payments.edit]);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        style={{
          cursor: 'pointer',
          backgroundColor: 'inherit',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        💰
      </Button>
      <Modal
        show={openModal}
        size="sm"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-600">
              ¿Deseas realizar el pago?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-orange-500 enabled:hover:bg-orange-600"
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                onClick={() => setOpenModal(false)}
              >
                Si
              </Button>
              <Button
                className="bg-slate-200 text-gray-900 hover:text-white enabled:hover:bg-red-600"
                style={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                onClick={() => setOpenModal(false)}
              >
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
