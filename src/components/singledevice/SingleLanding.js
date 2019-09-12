import React from 'react'
import { Grid, Header, Card, Form } from 'semantic-ui-react'


export default class SingleLanding extends React.Component {
  constructor() {
    super()

    this.state = {
      team1: {
        game_id: null,
        user_1: '',
        user_2: '',
        user_3: '',
        user_4: '',
        user_5: '',
        user_6: ''
      },
      team2: {
        game_id: null,
        user_1: '',
        user_2: '',
        user_3: '',
        user_4: '',
        user_5: '',
        user_6: ''
      }
    }
  }

  componentDidMount() {
    const game_id = this.props.gameId
    this.setState({
      team1: { ...this.state.team1, game_id },
      team2: { ...this.state.team2, game_id }
    })
  }

  changeState = (event, team) => {
    this.setState({
      [team]: {
        ...this.state[team],
        [event.name]: event.value
      }
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <>
        <Header style={{ marginTop: '2rem' }} as='h1'>Create Teams below</Header>
        <Grid container centered columns={2}>
          <Grid.Row stretched>
            <Form onSubmit={this.handleSubmit}  >
              <Card>
                <Card.Header as='h1'>Team 1</Card.Header>
                <Card.Content extra >
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_1} name="user_1" onChange={e => this.changeState(e.target, "team1")} required/>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_2} name="user_2" onChange={e => this.changeState(e.target, "team1")} required/>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_3} name="user_3" onChange={e => this.changeState(e.target, "team1")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_4} name="user_4" onChange={e => this.changeState(e.target, "team1")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_5} name="user_5" onChange={e => this.changeState(e.target, "team1")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team1.user_6} name="user_6" onChange={e => this.changeState(e.target, "team1")} />
                  </Form.Group>
                </Card.Content>
              </Card>
              <Card>
                <Card.Header as='h1'>Team 2</Card.Header>
                <Card.Content extra >

                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_1} name="user_1" onChange={e => this.changeState(e.target, "team2")} required/>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_2} name="user_2" onChange={e => this.changeState(e.target, "team2")} required/>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_3} name="user_3" onChange={e => this.changeState(e.target, "team2")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_4} name="user_4" onChange={e => this.changeState(e.target, "team2")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_5} name="user_5" onChange={e => this.changeState(e.target, "team2")} />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input size='large' placeholder="Name" value={this.state.team2.user_6} name="user_6" onChange={e => this.changeState(e.target, "team2")} />
                  </Form.Group>

                </Card.Content>
              </Card>
              <Form.Button positive size='large'>Create Team</Form.Button>
            </Form>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}