import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddFruit() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl = useRef("");

  const navigate = useNavigate();

  const addFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: quantity.current.value? Number(quantity.current.value) : 0 ,
      price: price.current.value ? Number(price.current.value):0,
      imageUrl: imageUrl.current.value,
    };
    axios.post("http://localhost:4000/fruits", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={fruitName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Quantity(KG Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="text" ref={imageUrl} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addFruitHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default AddFruit;
