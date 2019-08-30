import React from 'react'
import { Grid, Card, Button, Icon } from 'semantic-ui-react'

export default function LandingPage({setGameMode}) {
  return (
<Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'>Choose Your Mode</Card.Header>
            <Card.Content extra >
            <Icon className='inverted massive heart'></Icon>
            <Button value= "single" onClick={(e) => setGameMode(e)}>Single Device</Button>
            <Button value= "multi" onClick={(e) => setGameMode(e)}>Multi Device</Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
