import transformAddress from "./transform-data";
import { User } from "./user.interface"

import raw from './raw.json'

import express from "express";
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.json(transformAddress(raw.users as Array<User>))
})

app.get('/:id', (req, res) => {
  const { id } : { id: string } = req.params
  res.json(transformAddress(raw.users as Array<User>)[parseInt(id)])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})