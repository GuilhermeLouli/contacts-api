import { UpdateContact } from 'src/application/features/update-contact'
import { Request, Response } from 'express'
import { ValidationError } from 'src/domain/errors/validation-error'

export class UpdateContactController {

  constructor(
    private readonly updateContact: UpdateContact
  ) { }

  async handle(request: Request<{ id: string }>, response: Response) {
    try {
      const contact = await this.updateContact.execute({
        id: request.params.id,
        name: request.body.nome,
        phone: request.body.telefone
      })
      return response.status(200).json(contact)
    } 
    catch (error) {
      if (error instanceof ValidationError) return response.status(400).json({ error: error.message })
      return response.status(500).json({ error: "Internal server error" })
    }
  }
}
