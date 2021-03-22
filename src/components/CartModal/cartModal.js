import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CartModal = (props) => {
  return (
    <Modal
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
        <h4>Thank you for shopping with us!</h4>
        <p>
          Your item has being added to the cart successfully.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
