import React from "react";
import { Form,Button } from "react-bootstrap";

export const PrinterAddForms = () => {
  return (
    <div>
      <span className='title'>Formulaire d'ajout d'une imprimante</span>
      <Form>
        <Form.Group controlId="DesciptionTextField">
          <Form.Label className="h2 title">Desciption</Form.Label>
          <Form.Control type="text" placeholder="Original Prusa i3 MK3S." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
};
