import "dotenv/config"

import { NodeCryptoIdGenerator } from 'src/infra/crypto/node-id-generator'

import { MysqlContactRepository } from 'src/infra/repositories/mysql-contact-repository'
import { FakeContactRepository } from 'src/infra/repositories/fake-contact-repository'

import { CreateContactController, ReadContactController, UpdateContactController, DeleteContactController } from 'src/infra/http/controller'
import { DbCreateContact, DbReadContact, DbUpdateContact, DbDeleteContact } from "src/data/features"

import { createContactRoutes } from './routes/contact-routes'
import { createRoutes } from './routes'
import { createApp } from './app'

const PORT = process.env.PORT ?? 3000

const idGenerator = new NodeCryptoIdGenerator()

const contactRepository = process.env.DB_TYPE === "mysql"
  ? new MysqlContactRepository(idGenerator)
  : new FakeContactRepository(idGenerator)

const createContactFeature = new DbCreateContact(contactRepository)
const createContactController = new CreateContactController(createContactFeature)

const readContactFeature = new DbReadContact(contactRepository)
const readContactController = new ReadContactController(readContactFeature)

const updateContactFeature = new DbUpdateContact(contactRepository)
const updateContactController = new UpdateContactController(updateContactFeature)

const deleteContactFeature = new DbDeleteContact(contactRepository)
const deleteContactController = new DeleteContactController(deleteContactFeature)

const contactRoutes = createContactRoutes({
  createContactController,
  readContactController,
  updateContactController,
  deleteContactController,
})

const routes = createRoutes({
  contactRoutes,
})

const app = createApp(routes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})
