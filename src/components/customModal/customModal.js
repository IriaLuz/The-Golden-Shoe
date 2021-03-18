import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import sizeChart from './images/small-size-chart.jpg';
import './customModal.css';

const CustomModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal-btn" variant="link" onClick={handleShow}>
        See Size Chart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Size Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The Product come in half sizes to ensure the perfect fit for your
            run. They fit true to size for most customers. If you have wide feet
            or prefer a roomier fit to accommodate toe splay, we suggest going
            up a half size. For extra wide feet, go up a whole size. One more
            quick note: due to international size conversion, our women`&apos;`s
            shoe box and shoe state a UK size half a size larger compared to the
            size you chose online. Don`&apos;`t worry, the size of shoe you
            receive will be the size you ordered (for example, if you ordered a
            UK 5, you will receive a UK 5, even though the box and shoe will
            state a UK 5.5).
          </p>
          <img id="size-chart" src={sizeChart} alt="size chart" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomModal;
