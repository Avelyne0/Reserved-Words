import React from 'react'
import { Grid, Card, Button, Icon } from 'semantic-ui-react'

export default function LandingPage({setGameMode}) {
  return (
<Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'><Icon inverted color='red' size='large' name='question circle'/>Welcome to Reserved Word</Card.Header>
            <p>The game where you must keep talking without using any of the reserved words.</p>
            <p>Successfully describe the target word to your team and win a point</p>
            <p>But say any of the reserved words on the screen and you will lose a point</p>
            <p>Each person has a round in the spotlight</p>
            <Card.Header as='h2'>Choose Your Mode</Card.Header>
            <Card.Content extra >
            <Icon className='inverted massive heart'></Icon>
            <Button value= "single" onClick={(e) => setGameMode(e)}>Single Device</Button>
            <Button value= "multi" >Multi Device</Button>
            {/* onClick={(e) => setGameMode(e)} */}
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
