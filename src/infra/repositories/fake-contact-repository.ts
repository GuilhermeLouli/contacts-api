import { ContactRepository } from "src/data/protocols/contact-repository"
import { Contact } from 'src/domain/entities/contact'
import { IdGenerator } from "src/data/protocols/id-generator"

export class FakeContactRepository implements ContactRepository {

  private contacts: Contact[] = []

  constructor(
    private readonly idGenerator: IdGenerator
  ) { }

  async create(params: ContactRepository.CreateParams) {
    const newContact = new Contact(this.idGenerator.generate(), params.name, params.phone)
    this.contacts.push(newContact)
    return newContact
  }

  async read(): Promise<Contact[]> {
    return this.contacts
  }

  async update(params: ContactRepository.UpdateParams): Promise<Contact> {
    const id = params.id

    const index = this.contacts.findIndex(contact => contact.id === id)

    const contact = { ...this.contacts[index] }
    contact.name = params.name
    contact.phone = params.phone

    this.contacts[index] = { ...this.contacts[index], ...contact}

    return this.contacts[index]
  }

  async delete(params: ContactRepository.DeleteParams): Promise<void> {
    const id = params.id

    const index = this.contacts.findIndex(contact => contact.id === id)

    this.contacts.splice(index, 1)
  }
}
