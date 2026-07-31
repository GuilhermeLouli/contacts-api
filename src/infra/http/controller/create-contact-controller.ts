import { CreateContact } from 'src/application/features/create-contact'
import { Request, Response } from 'express'
import { ValidationError } from 'src/domain/errors/validation-error'

export class CreateContactController {

  constructor(
    private readonly createContact: CreateContact
  ) { }

  async handle(request: Request, response: Response) {
    try {
      const contact = await this.createContact.execute({
        name: request.body.nome,
        phone: request.body.telefone
      })
      return response.status(201).json(contact)
    } 
    catch (error) {
      if (error instanceof ValidationError) return response.status(400).json({ error: error.message })
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}
