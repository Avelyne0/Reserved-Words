import React from 'react'
import { Grid, Card, Button, Icon } from 'semantic-ui-react'

export default function LandingPage({setGameMode}) {
  return (
<Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header style={{ padding: '0.5em 0em' }} as='h1'><Icon inverted color='red' size='large' name='question circle'/>Reserved Words</Card.Header>
            <Card.Header style={{ padding: '0.5em 0em' }} as='h2'>The fast talking description game.</Card.Header>
            <p>Successfully describe the target word to your team and win a point</p>
            <p>But say any of the reserved words on the screen and you will lose a point</p>
            <p>Each person has a single round in the spotlight</p>
            <Card.Content extra >
            <p>With a single device, it might be a good idea for the person who's round it is to pair up with someone on the opposite team to check that they don't 'accidentally' cheat!</p>
            {/* <Card.Header as='h2'>Begin Game</Card.Header> */}
            <Button size="large" value="single" onClick={(e) => setGameMode(e)}>Begin Game</Button>
            {/* <Button value="multi" >Multi Device</Button> */}
            {/* onClick={(e) => setGameMode(e)} */}
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
