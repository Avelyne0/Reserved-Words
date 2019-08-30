import React from 'react'
import { Card, Grid, Button, Form } from 'semantic-ui-react'
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeReader from './QRCodeReader';


export default class MultiLanding extends React.Component {
  state = {
    name: null,
    gameId: '',
    showQRCode: false,
    showQRReader: false,
  }

  QRShowButton=()=>{
    this.setState({showQRCode: !this.state.showQRCode})
    this.setState({showQRReader: false})
  }

  QRReaderButton=()=>{
    this.setState({showQRReader: !this.state.showQRReader})
    this.setState({showQRCode: false})
  }

  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'>Add your Name</Card.Header>
            <Card.Content extra >
              <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
                <Form.Group widths="equal">
                  <Form.Input size='huge' placeholder="Name" name="name" />
                </Form.Group>
                <Form.Button positive size='massive'>Good to Go</Form.Button>
              </Form>
            </Card.Content>
            <Button onClick={this.QRShowButton}>Host a Game</Button>
            <Button onClick={this.QRReaderButton}>Join a Game</Button>
            {this.state.showQRCode? <QRCodeGenerator gameId={this.state.gameId} /> : null}
            {this.state.showQRReader? <QRCodeReader /> : null}
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}
