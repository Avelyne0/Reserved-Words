import React from 'react'
import { Grid, Card, Button, Icon } from 'semantic-ui-react'


export default function YoureUpScreen({begin, currentUser}) {
  return (
    <Grid container centered columns={2}>
        <Grid.Row stretched>
          <Card>
            <Card.Header as='h1'>{currentUser}</Card.Header>
            <Card.Content extra >
            <Button onClick={begin}>Begin</Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
  )
}
