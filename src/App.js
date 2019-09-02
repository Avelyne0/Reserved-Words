import React, { Component } from 'react';
import API from './adapters/API';
import './App.css';
import LandingPage from './components/LandingPage';
// import RoundContainer from './containers/RoundContainer';
import MultiLanding from './components/multidevice/MultiLanding';
// import QRCodeReader from './components/multidevice/QRCodeReader';
// import QRCodeGenerator from './components/multidevice/QRCodeGenerator';
// import QuestionCard from './components/singledevice/QuestionCard';
import SingleLanding from './components/singledevice/SingleLanding';
// import RosterForm from './components/singledevice/RosterForm';
import { Grid, Container } from 'semantic-ui-react';

class App extends Component {

  state = {
    questions: [],
    gameId: null,
    gameMode: null,
    teams: []

  }

  componentDidMount() {
    // API.getQuestions()
    //   .then(questions => this.setState({ questions }))
    API.newGame()
      .then(game => this.setState({ gameId: game.id }))
  }

  setGameMode = (event) => this.setState({ gameMode: event.target.value })
  // console.log(event.target.value)
  // event.preventDefault()

  addTeams = teams => {
    API.addTeams (teams.team1, teams.team2)
      .then(teams => console.log(teams))
  }


  renderLandingPage(gameMode) {
    return (
      <>
        {
          gameMode === null ? <LandingPage setGameMode={this.setGameMode} /> : null
        }
        {
          gameMode === 'single' ? <SingleLanding gameId={this.state.gameId} onSubmit={this.addTeams}/> : null
        }
        {
          gameMode === 'multi' ? <MultiLanding gameId={this.state.gameId} addTeam={this.addTeam}/> : null
        }
      </>
    )
  }

  render() {
    return (
      <Container fluid>
        <Grid centered>
          {(this.state.teams.length < 2) ? this.renderLandingPage(this.state.gameMode) : null}
          {/* <RosterForm header="Team"/> */}
          {/* <RoundContainer questions={this.state.questions} timer={'60'} score={'4'} /> */}
          {/* <QRCodeReader />
        <QRCodeGenerator /> */}
        </Grid>
      </Container>
    );
  }
}

export default App;