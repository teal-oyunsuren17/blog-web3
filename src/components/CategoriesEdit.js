import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CategoriesEdit({ show, onClose }) {
  const [text1, setText1] = useState("");
  const [text, setText] = useState([]);

  function textChange(e) {
    setText1(e.target.value);
  }

  function saveBtn() {
    const newText = { text1, ...text };
    setText(newText);
    setText1("");
  }

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zasah heseg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type={"text"} value={text1} onChange={textChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveBtn}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
