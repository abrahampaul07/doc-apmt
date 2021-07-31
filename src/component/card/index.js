import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from "faker";


const { Meta } = Card;
// make a card class as it in ant design
class CardContainer extends React.Component {
  state = {
    data: '',
  };

  componentDidMount = async () => {
    try {
      const data = await axios.get('/api/v1/doctors');
      this.setState(data);
    } catch (e) {
      this.setState({});
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="doctors">
          <Card className="mt-5">
            <img src={faker.image.avatar()} alt="doc1" height="400px" width="400px"></img>
            <Form>
  <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor1"/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Cardiologist" readOnly="doctor1"/>
  </Form.Group>
</Form>    
          </Card>
          <Card className="mt-5">
            <img src={faker.image.avatar()} alt="doc2" height="400px" width="400px"></img>
            <Form>
  <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor2" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Dermatologist" readOnly="doctor2" />
  </Form.Group>
</Form>    
          </Card>

                <Card className="mt-5">
            <img src={faker.image.avatar()} alt="doc3" height="400px" width="400px"></img>
            <Form>
            <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor3" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Paediatrician" readOnly="doctor3" />
  </Form.Group>
</Form>    
          </Card>

          <Card className="mt-5">
            <img src={faker.image.avatar()} alt="doc3" height="400px" width="400px"></img>
            <Form>
            <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor3" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Gastroenterologists" readOnly="doctor3" />
  </Form.Group>
</Form>    
          </Card>

          <Card className="mt-5">
            <img src={faker.image.avatar()} height="400px" width="400px"></img>
            <Form>
            <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor3" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Neurologists" readOnly="doctor3" />
  </Form.Group>
</Form>    
          </Card>

          <Card className="mt-5">
            <img src={faker.image.avatar()} alt="doc3" height="400px" width="400px"></img>
            <Form>
            <Form.Group className="mb-3 pt-5">
    <Form.Label><h5><b>Doctor's Name</b></h5></Form.Label>
    <Form.Control type="text" placeholder={faker.name.findName()} readOnly="doctor3" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label><h5><b>Specialization</b></h5></Form.Label>
    <Form.Control type="text" placeholder="Gynecologists" readOnly="doctor3" />
  </Form.Group>
</Form>    
          </Card>
      </div>
    );
  }
}

export default CardContainer;
