import { Router } from 'express'

type RouteDependencies = {
  readonly contactRoutes: Router
}

export function createRoutes({
  contactRoutes,
}: RouteDependencies): Router {
  const router = Router()

  router.use('/contatos', contactRoutes)

  return router
}
