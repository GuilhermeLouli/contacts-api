import { ReadContact } from 'src/application/features/read-contact'
import { Request, Response } from 'express'

export class ReadContactController {

  constructor(
    private readonly readContact: ReadContact
  ) { }

  async handle(_: Request, response: Response) {
    const contacts = await this.readContact.execute()
    return response.status(200).json(contacts)
  }
}
