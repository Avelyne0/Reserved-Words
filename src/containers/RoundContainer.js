import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import QuestionCard from '../components/singledevice/QuestionCard';
import Countdown from 'react-countdown-now';


export default class RoundContainer extends Component {

  state = {
    minutes: 1,
    seconds: 0,
    score: 0,
    index: 0
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
      score: this.state.score + 1,
      index: this.state.index + 1
    })
  }

  incorrectAnswer() {
    this.setState({
      score: this.state.score - 1,
      index: this.state.index + 1
    })
  }

  render() {
    const { minutes, seconds } = this.state
    const question = this.props.questions[this.state.index]
    return (
      <Grid container centered columns={2}>
        <Grid.Row centered columns={2}>

          <Button width='4' floated='left' size='massive' circular negative>
          { minutes === 0 && seconds === 0
            ? <h1>Time's Up</h1>
                    : <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
          </Button>
          <Button width='4' floated='right' size='massive' circular positive><h1>{this.state.score}</h1></Button>
        </Grid.Row>
        <Grid.Row stretched>
          <QuestionCard {...question} />
        </Grid.Row>
        <Grid.Row verticalAlign='bottom'>
          <Button.Group size='massive' widths='2'>
            <Button negative onClick={() => this.incorrectAnswer()}>Oops!</Button>
            <Button.Or />
            <Button positive onClick={() => this.correctAnswer()}>They Got It</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>

    )
  }
}
