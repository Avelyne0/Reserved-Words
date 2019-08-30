import React from 'react'
import { Card, Grid, Button, Form, Header } from 'semantic-ui-react'


export default class SingleLanding extends React.Component {
  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Row stretched>
        <Header as='h1'>Create Teams below</Header>
          <Card>
            <Card.Header as='h1'>Team 1</Card.Header>
            <Card.Content extra >
              <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
                <Form.Group widths="equal">
                  <Form.Input size='large' placeholder="Name" name="player1" />
                  <Form.Input size='large' placeholder="Name" name="player2" />
                  <Form.Input size='large' placeholder="Name" name="player3" />
                  <Form.Input size='large' placeholder="Name" name="player4" />
                  <Form.Input size='large' placeholder="Name" name="player5" />
                  <Form.Input size='large' placeholder="Name" name="player6" />
                </Form.Group>
                <Form.Button positive size='large'>Create Team 1</Form.Button>
              </Form>
              </Card.Content>
          </Card>
          <Card>
            <Card.Header as='h1'>Team 2</Card.Header>
            <Card.Content extra >
              <Form onSubmit={this.handleSubmit} onChange={e => this.changeState(e.target.name, e.target.value)} >
                <Form.Group widths="equal">
                  <Form.Input size='large' placeholder="Name" name="player1" />
                  <Form.Input size='large' placeholder="Name" name="player2" />
                  <Form.Input size='large' placeholder="Name" name="player3" />
                  <Form.Input size='large' placeholder="Name" name="player4" />
                  <Form.Input size='large' placeholder="Name" name="player5" />
                  <Form.Input size='large' placeholder="Name" name="player6" />
                </Form.Group>
                <Form.Button positive size='large'>Create Team 2</Form.Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    )
  }
}
