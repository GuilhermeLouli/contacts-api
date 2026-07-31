import { ContactRepository } from '../protocols/contact-repository'
import { CreateContact } from '../../application/features/create-contact'

export class DbCreateContact implements CreateContact {

  constructor(
    private readonly repository: ContactRepository
  ) {}

  async execute(params: CreateContact.Params) {
    return this.repository.create(params)
  }
}
