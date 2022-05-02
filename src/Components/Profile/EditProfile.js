import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit_field } from "../../Redux/Actions/fieldActions";
function Example({ id, field }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(field.name);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input onChange={(e) => setPrice(e.target.value)} />
          <input onChange={(e) => setImage(e.target.value)} />
          <input onChange={(e) => setCapacity(e.target.value)} />
          <input onChange={(e) => setLocation(e.target.value)} />
          <input onChange={(e) => setPhoneNumber(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              dispatch(
                edit_field(id, {
                  name,
                  price,
                  location,
                  image,
                  capacity,
                  phoneNumber,
                })
              )
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
