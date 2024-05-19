/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

export function ModalDatePicker({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="bg-orange-500 enabled:hover:bg-orange-600"
        style={{
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
        onClick={() => setOpenModal(true)}
      >
        Editar fecha
      </Button>
      <div className="">
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="rounded-lg bg-white shadow-lg"
          size={'sm'}
        >
          <Modal.Body>
            <div className="space-y-6">{children}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-orange-500 enabled:hover:bg-orange-600"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
              onClick={() => setOpenModal(false)}
            >
              Aceptar
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
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
