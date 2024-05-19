import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

export function DefineModal({ modal }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="space-y-6">{modal && <modal />}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Aceptar</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
