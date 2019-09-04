import React, { Component } from 'react';
import API from './adapters/API';
import './App.css';
import LandingPage from './components/LandingPage';
import RoundContainer from './containers/RoundContainer';
import MultiLanding from './components/multidevice/MultiLanding';
// import QRCodeReader from './components/multidevice/QRCodeReader';
// import QRCodeGenerator from './components/multidevice/QRCodeGenerator';
import SingleLanding from './components/singledevice/SingleLanding';
import { Grid, Container } from 'semantic-ui-react';
import YoureUpScreen from './components/singledevice/YoureUpScreen';

class App extends Component {

  state = {
    questions: [],
    gameId: null,
    gameMode: null,
    teams: [],
    askedQuestionIds: [],
    currentQuestion: null,
    roundCounter: null,
    ready: false,
    gameLive: false,
    currentUser: null,
    currentTeam: 0
  }

  componentDidMount() {
    API.getQuestions()
      .then(questions => this.setState({ questions }))
      .then(this.fetchNewQuestion)
    API.newGame()
      .then(game => this.setState({ gameId: game.id }))
  }

  setGameMode = (event) => this.setState({ gameMode: event.target.value })

  addTeams = teams => {
    
    API.addTeams(teams.team1, teams.team2)
      .then(data =>this.setState({ ...data, currentUser: data.teams[0].users[0].name }))
      .then(this.setCurrentUser)
      .then(this.setState({ ready: true }))
  }

  fetchNewQuestion = () => {
    const availableQuestions = this.state.questions.filter(question => !(this.state.askedQuestionIds.includes(question.id)))
    const newQuestion = availableQuestions[Math.floor((Math.random() * availableQuestions.length))]
    this.setState({ currentQuestion: newQuestion })
  }

  onClickAnswer = (questionId) => {
    this.setState({ askedQuestionIds: [...this.state.askedQuestionIds, questionId] })
    this.fetchNewQuestion()
  }

  // setCurrentUser = () => this.setState({ currentUser: this.state.teams[this.state.currentTeam].users[0].name })
  

  beginGame = () => this.setState({ gameLive: true })

  renderLandingPage(gameMode) {
    return (
      <>
        {
          gameMode === null ? <LandingPage setGameMode={this.setGameMode} /> : null
        }
        {
          gameMode === 'single' ? <SingleLanding gameId={this.state.gameId} onSubmit={this.addTeams} /> : null
        }
        {
          gameMode === 'multi' ? <MultiLanding gameId={this.state.gameId} addTeam={this.addTeam} /> : null
        }
      </>
    )
  }

  render() {
    if (this.state.gameLive) {
      return (
        <Container fluid>
          <Grid centered>
            <RoundContainer user={this.state.currentUser} question={this.state.currentQuestion} onClickAnswer={this.onClickAnswer} timer={'60'} score={'4'} />
          </Grid>
        </Container>
      )
    }
    return (
      <Container fluid>
        <Grid centered>
          {
            this.state.ready ?
              <YoureUpScreen user={this.state.currentUser} begin={this.beginGame} />
              :
              this.renderLandingPage(this.state.gameMode)
          }
        </Grid>
      </Container>
    );
  }
}

export default App;