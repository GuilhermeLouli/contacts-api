import express, { Router } from 'express'

export function createApp(routes: Router) {
  const app = express()
  app.use(express.json())
  app.use(routes)
  return app
}
