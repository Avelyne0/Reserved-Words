import React from 'react'
import { Grid, Header, Card, Form } from 'semantic-ui-react'


export default class SingleLanding extends React.Component {
  constructor() {
    super()

    this.state = {
      team1: {
        game_id: null,
        user1: null,
        user2: null,
        user3: null,
        user4: null,
        user5: null,
        user6: null
      },
      team2: {
        game_id: null,
        user1: null,
        user2: null,
        user3: null,
        user4: null,
        user5: null,
        user6: null
      }
    }
  }

  componentDidMount(){
    const game_id = this.props.gameId
    this.setState({
      team1: {...this.state.team1, game_id},
      team2: {...this.state.team2, game_id} 
    })
  }

  changeState = (event, team) => {this.setState({
    [team]: {
      ...this.state[team],
      [event.name]: event.value
    }
  })}

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Row stretched>
        <Header as='h1'>Create Teams below</Header>
          <Form onSubmit={this.handleSubmit}  >
          <Card>
            <Card.Header as='h1'>Team 1</Card.Header>
            <Card.Content extra >
                <Form.Group widths="equal">
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user1} name="user1" onChange={e => this.changeState(e.target, "team1")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user2} name="user2" onChange={e => this.changeState(e.target, "team1")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user3} name="user3" onChange={e => this.changeState(e.target, "team1")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user4} name="user4" onChange={e => this.changeState(e.target, "team1")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user5} name="user5" onChange={e => this.changeState(e.target, "team1")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team1.user6} name="user6" onChange={e => this.changeState(e.target, "team1")} />
                </Form.Group>
              </Card.Content>
          </Card>
          <Card>
            <Card.Header as='h1'>Team 2</Card.Header>
            <Card.Content extra >
                <Form.Group widths="equal">
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user1} name="user1" onChange={e => this.changeState(e.target, "team2")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user2} name="user2" onChange={e => this.changeState(e.target, "team2")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user3} name="user3" onChange={e => this.changeState(e.target, "team2")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user4} name="user4" onChange={e => this.changeState(e.target, "team2")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user5} name="user5" onChange={e => this.changeState(e.target, "team2")} />
                  <Form.Input size='large' placeholder="Name" value={this.state.team2.user6} name="user6" onChange={e => this.changeState(e.target, "team2")} />
                </Form.Group>
              </Card.Content>
          </Card>
          <Form.Button positive size='large'>Create Team</Form.Button>
          </Form>
        </Grid.Row>
      </Grid>
    )
  }
}