import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateFruit() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/fruits/${id}`).then((response) => {
      fruitName.current.value = response.data.name;
      quantity.current.value = response.data.quantity;
      price.current.value = response.data.price;
      imageUrl.current.value = response.data.imageUrl;
    });
  }, []);

  const updateFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      imageUrl: imageUrl.current.value,
    };

    axios.put(`http://localhost:4000/fruits/${id}`, payload).then((response) => {
        navigate("/");
    })
  };

  return (
    <>
      <legend>Update</legend>
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
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateFruit;
