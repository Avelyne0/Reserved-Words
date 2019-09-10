import React, { Component } from 'react'
import { Button, Grid, Container, Dimmer, Loader, Icon } from 'semantic-ui-react'
import QuestionCard from '../components/singledevice/QuestionCard';
import API from '../adapters/API';



export default class RoundContainer extends Component {

  state = {
    minutes: 0,
    seconds: 1,
    score: 0
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
          this.props.roundComplete(this.state.score)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  correctAnswer() {
    this.setState({
      score: this.state.score + 1
    })
    this.props.onClickAnswer()
  }

  incorrectAnswer() {
    this.setState({
      score: this.state.score - 1
    })
    this.props.onClickAnswer()
  }

  render() {
    if (!this.props.question) {
      return <Container>
        <Dimmer 
        active 
        inverted
        >
          <Loader 
          inverted 
          content='Loading' 
          />
        </Dimmer>
      </Container>
    }

    const { minutes, seconds } = this.state

    return (
      <Grid 
      container
      centered 
      columns={2}
      >
        <Grid.Row 
        centered 
        columns={2}
        >
          <Button
            width='4'
            floated='left'
            size='huge'
            circular
            negative
            >
            {
              minutes === 0 && seconds === 0
                ?
                <h2><Icon name='exclamation'/>Time's Up</h2>
                :
                <h2><Icon name='stopwatch'/>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
            }
          </Button>
          <Button
            width='4'
            floated='right'
            size='huge'
            circular
            positive
            >
            <h2>{
              this.state.score
            }</h2>
          </Button>
        </Grid.Row>
        <Grid.Row stretched>
          <QuestionCard {...this.props.question} />
        </Grid.Row>
        <Grid.Row verticalAlign='bottom'>
          <Button.Group 
          size='massive' 
          widths='2'
          >
            <Button
              negative
              onClick={() => this.incorrectAnswer()}
              >
              Oops!
            </Button>
            <Button.Or />
            <Button
              positive
              onClick={() => this.correctAnswer()}
              >
              They Got It
            </Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    )
  }
}