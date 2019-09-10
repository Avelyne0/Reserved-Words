import React, { Component } from 'react';
import API from './adapters/API';
import './App.css';
import LandingPage from './components/LandingPage';
import RoundContainer from './containers/RoundContainer';
import MultiLanding from './components/multidevice/MultiLanding';
// import QRCodeReader from './components/multidevice/QRCodeReader';
// import QRCodeGenerator from './components/multidevice/QRCodeGenerator';
import SingleLanding from './components/singledevice/SingleLanding';
import { Grid, Container, Icon, Card } from 'semantic-ui-react';
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
    gameOver: false,
    currentUser: null,
    currentTeam: 0,
    roundIndex: 0
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
      .then(data =>
        this.setState({ ...data, currentUser: data.teams[0].users[0].name }))
      .then(this.setCurrentUser)
      .then(this.setState({ ready: true }))
  }

  fetchNewQuestion = () => {
    const availableQuestions = this.state.questions.filter(question =>
      !(this.state.askedQuestionIds.includes(question.id)))
    const newQuestion = availableQuestions[Math.floor((Math.random() * availableQuestions.length))]
    this.setState({ currentQuestion: newQuestion })
  }

  onClickAnswer = (questionId, score) => {
    const userIndex = Math.floor(this.state.roundIndex / 2)
    const userId = this.state.teams[this.state.currentTeam].users[userIndex].id
    API.updateScore(userId, score)
    this.setState({ askedQuestionIds: [...this.state.askedQuestionIds, questionId] })
    this.fetchNewQuestion()
  }

  onRoundComplete = (score) => {
    const userIndex = Math.floor(this.state.roundIndex / 2)
    const newRoundIndex = this.state.roundIndex + 1
    const currentTeam = (this.state.roundIndex % 2)
    const newCurrentTeam = newRoundIndex % 2
    const newUserIndex = Math.floor(newRoundIndex / 2)
    const newTeamsArray = [...this.state.teams]
    const newUsersArray = [...this.state.teams[currentTeam].users]
    newUsersArray[userIndex] = { ...newUsersArray[userIndex], score: score }
    newTeamsArray[currentTeam] = {
      ...this.state.teams[currentTeam],
      users: newUsersArray
    }
    this.setState({
      gameLive: false,
      roundIndex: newRoundIndex,
      teams: newTeamsArray,
      currentTeam: newCurrentTeam
    })
    if (newRoundIndex < this.state.userCount) {
      if ( this.state.teams[newCurrentTeam].users[newUserIndex] ) {
      this.setState({ currentUser: (this.state.teams[newCurrentTeam].users[newUserIndex].name) })
      this.fetchNewQuestion()
      } else {
        this.onRoundComplete()
      }
    } else {
      this.setState({
        gameLive: false,
        gameOver: true
      })
    }
  }

  getTeamScore = (i) => {
    if (this.state.teams.length > 0) {
      const teamScore = this.state.teams[i].users.reduce(function (prev, cur) {
        return prev + cur.score;
      }, 0);
      return (teamScore)
    }
  }


  beginGame = () => this.setState({
    gameLive: true
  })

  renderLandingPage(gameMode) {
    return (
      <>
        {
          gameMode === null
            ?
            <LandingPage
              setGameMode={this.setGameMode}
            />
            :
            null
        }
        {
          gameMode === 'single'
            ?
            <SingleLanding
              gameId={this.state.gameId}
              onSubmit={this.addTeams}
            />
            :
            null
        }
        {
          gameMode === 'multi'
            ?
            <MultiLanding
              gameId={this.state.gameId}
              addTeam={this.addTeam}
            />
            :
            null
        }
      </>
    )
  }

  render() {

    if (this.state.gameLive) {
      return (
        <Container fluid>
          <Grid centered>
            <RoundContainer
              user={this.state.currentUser}
              question={this.state.currentQuestion}
              onClickAnswer={this.onClickAnswer}
              roundComplete={this.onRoundComplete}
            />
          </Grid>
        </Container>
      )
    }

    if (this.state.gameOver && !this.state.gameLive) {
      return (
        <Container fluid>
          <Grid>
            <Grid centered
              container
              columns={2}>
              <Grid.Row stretched>
                <Card>
                  <Card.Header as='h1'>Game Over</Card.Header>
                  <Card.Content >
                    <h2><Icon name='trophy' />
                      game over, someone done won</h2>
                    {this.getTeamScore(0)} : {this.getTeamScore(1)}
                    <Card.Header as='h1'>
                      {
                        this.state.teams.map(team =>
                          team.users ? team.users.map(user =>
                          user.name ? <div>{user.name}: {user.score}</div> 
                          : null) 
                          : null)
                      }
                    </Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Row>
            </Grid>
          </Grid>
        </Container>
      )
    }

    return (
      <Container fluid>
        <Grid centered>
          {
            this.state.ready ?
              <YoureUpScreen
                user={this.state.currentUser}
                begin={this.beginGame}
                score1={this.getTeamScore(0)}
                score2={this.getTeamScore(1)}
              />
              :
              this.renderLandingPage(this.state.gameMode)
          }
        </Grid>
      </Container>
    );
  }
}

export default App;