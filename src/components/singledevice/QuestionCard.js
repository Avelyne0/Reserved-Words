import React from 'react'
import { Card } from 'semantic-ui-react'

export default function QuestionCard({ word, taboo1, taboo2, taboo3, taboo4 }) {
  return (
    <Card>
      <Card.Header as='h1'>{word}</Card.Header>
      <Card.Content extra >
        <h2>{taboo1}</h2>
        <h2>{taboo2}</h2>
        <h2>{taboo3}</h2>
        <h2>{taboo4}</h2>
      </Card.Content>
    </Card>
  )
}
