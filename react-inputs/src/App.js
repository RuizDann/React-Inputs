import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Card, Form} from 'react-bootstrap';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = ({
        display: false,
        btnDisplay: false,
        username: "",
        password: "",
    });

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleUsername(e){
      let username = e.target.value;
      this.setState({
          username: username
      })
  }

  handlePassword(e){
      let password = e.target.value;
      this.setState({
          password: password
      })
  }

  handleSubmit(e) {
      e.preventDefault();
      if (!this.state.username && !this.state.password)
          return;
      this.setState({
          display: true,
          btnDisplay:true
      })
  }

  renderCaptcha(){
      return(
          <div>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="4">
                      Captcha
                  </Form.Label>
                  <Col>
                      <Form.Control type="text" placeholder="Enter Captcha"  />
                  </Col>
              </Form.Group>

              <Button variant="primary" type="save" disabled={this.state.btnDisplay}>
                  Login
              </Button>

          </div>
      )
  }

  render() {
    return (
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username"
                                          onChange={this.handleUsername}
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={this.handlePassword}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit"
                                onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>

                        {this.state.display? this.renderCaptcha():""}
                    </Form>

                </Card.Body>
            </Card>
          </Col>
        </Row>
    );
  }
}

export default App;