import React from 'react'
import { Card, Button, Grid, Input, Form } from 'semantic-ui-react'

export default class RosterForm extends React.Component {
  state = {
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    player6: ''
  }

  changeState = (key, value) => this.setState({
    [key]: value
  })


  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: ''
    })
  }

  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'>{this.props.header}</Card.Header>
            <Card.Content extra >
              <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
                <Form.Group widths="equal">
                  <Form.Input size='huge' placeholder="Name" name="name" />
                  <Form.Input size='huge' placeholder="Name" name="name" />
                  <Form.Input size='huge' placeholder="Name" name="name" />
                  <Form.Input size='huge' placeholder="Name" name="name" />
                  <Form.Input size='huge' placeholder="Name" name="name" />
                  <Form.Input size='huge' placeholder="Name" name="name" />
                </Form.Group>
                <Form.Button positive size='massive'>Good to Go</Form.Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}
