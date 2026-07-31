import { ContactRepository } from '../protocols/contact-repository'
import { UpdateContact } from '../../application/features/update-contact'

export class DbUpdateContact implements UpdateContact {

  constructor(
    private readonly repository: ContactRepository
  ) {}

  async execute(params: UpdateContact.Params) {
    return this.repository.update(params)
  }
}
