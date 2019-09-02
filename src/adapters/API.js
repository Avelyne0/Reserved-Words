let endpoint = null
if (window.location.href.includes('netlify')) {
  endpoint = 'https://reserved-words-backend.herokuapp.com';
} else {
  endpoint = 'http://localhost:3000'
}

const gamesUrl = `${endpoint}/games`
const roundsUrl = `${endpoint}/rounds`
const usersUrl = `${endpoint}/users`
const teamsUrl = `${endpoint}/teams`
const questionsUrl = `${endpoint}/questions`

const getQuestion = id => fetch(`${questionsUrl}/${id}`).then(res => res.json())
const getQuestions = () => fetch(questionsUrl).then(res => res.json())

const getGame = id => fetch(`${gamesUrl}/${id}`).then(res => res.json())
const getGames = () => fetch(gamesUrl).then(res => res.json())

const getRound = id => fetch(`${roundsUrl}/${id}`).then(res => res.json())
const getRounds = () => fetch(roundsUrl).then(res => res.json())

const getTeam = id => fetch(`${teamsUrl}/${id}`).then(res => res.json())
const getTeams = () => fetch(teamsUrl).then(res => res.json())

const getUser = id => fetch(`${usersUrl}/${id}`).then(res => res.json())
const getUsers = () => fetch(usersUrl).then(res => res.json())

const newGame = () => fetch(gamesUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json())

const addTeams = (team1, team2) => fetch(teamsUrl, {
  method: 'POST',
  body: JSON.stringify({
    "team1": team1,
    "team2": team2,
  }),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json())

const addPlayers = (user, team_id) => fetch(usersUrl, {
  method: 'POST',
  body: {
    name: user.name,
    team_id: team_id
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json())


export default {
  newGame,
  addTeams,
  addPlayers,
  getQuestion,
  getQuestions,
  getGame,
  getGames,
  getRound,
  getRounds,
  getTeam,
  getTeams,
  getUser,
  getUsers
}
