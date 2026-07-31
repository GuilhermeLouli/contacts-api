import { Router } from 'express'
import { CreateContactController, ReadContactController, UpdateContactController, DeleteContactController } from 'src/infra/http/controller'

type RouteDependencies = {
  createContactController: CreateContactController,
  readContactController: ReadContactController,
  updateContactController: UpdateContactController,
  deleteContactController: DeleteContactController,
}

export function createContactRoutes({
  createContactController,
  readContactController,
  updateContactController,
  deleteContactController,
}: RouteDependencies) {
  const router = Router()

  router.post('/', createContactController.handle.bind(createContactController))
  router.get('/', readContactController.handle.bind(readContactController))
  router.patch('/:id', updateContactController.handle.bind(updateContactController))
  router.delete('/:id', deleteContactController.handle.bind(deleteContactController))

  return router
}
