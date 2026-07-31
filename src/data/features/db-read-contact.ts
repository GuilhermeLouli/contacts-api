import { ReadContact } from 'src/application/features/read-contact'
import { ContactRepository } from '../protocols/contact-repository'

export class DbReadContact implements ReadContact {

  constructor(
    private readonly repository: ContactRepository
  ) {}

  async execute() {
    return this.repository.read()
  }
}
