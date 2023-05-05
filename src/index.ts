import transformAddress from "./transform-data";
import raw from './raw.json'

import express from "express";
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.json(transformAddress(raw))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})