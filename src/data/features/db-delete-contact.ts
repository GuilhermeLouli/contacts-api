import { ContactRepository } from '../protocols/contact-repository'
import { DeleteContact } from '../../application/features/delete-contact'

export class DbDeleteContact implements DeleteContact {

  constructor(
    private readonly repository: ContactRepository
  ) {}

  async execute(params: DeleteContact.Params) {
    return this.repository.delete(params)
  }
}
