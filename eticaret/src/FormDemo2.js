import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormDemo2 extends Component {
  state = { email: "", password: "", desription: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Veritabanına Eklendi!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E-Mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Lütfen Emailinizi Yazınız!"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Şifre</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Lütfen Şifrenizi Giriniz."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="desription">Açıklama</Label>
            <Input
              type="textarea"
              name="desription"
              id="desription"
              placeholder="Lütfen Açıklama Yazınız."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">Şehir</Label>
            <Input
              placeholder=""
              type="select"
              name="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Antalya</option>
            </Input>
          </FormGroup>
          <Button type="submit">Gönder</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo2;
