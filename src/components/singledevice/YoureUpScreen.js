import React from 'react'
import { Grid, Card, Button, Icon, Container, Dimmer, Loader } from 'semantic-ui-react'


export default function YoureUpScreen({begin, user, score1, score2}) {

  if (!user) {
    return <Container>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Container>
  }
  return (
    <Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'>Hey, {user}!</Card.Header>
            <Card.Header as='h1'>You're up</Card.Header>
            <Card.Content extra >
            team1: {score1 || null}, team2: {score2 || null}
            <Button onClick={begin}>Begin</Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
