import React from 'react'
import { Grid, Card, Button, Container, Dimmer, Loader, Icon } from 'semantic-ui-react'


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
            <Card.Header style={{ padding: '1em 0em' }} as='h1'>Hey, {user}!</Card.Header>
            <Card.Header as='h1'>Time to start talking</Card.Header>
            <p><Icon size="huge" name="announcement"/></p>
            <Card.Content extra >
            <Card.Header style={{ padding: '1em 0em' }} as='h1'>{
              score1 || score2 
              ? 
              <div>
              team1: {score1 || 'nothing yet'}, team2: {score2 || 'nothing yet'}
              </div>
              :
              null
            }</Card.Header>
            <Button onClick={begin}>Begin</Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
