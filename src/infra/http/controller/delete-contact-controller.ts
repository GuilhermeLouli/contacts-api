import { DeleteContact } from 'src/application/features/delete-contact'
import { Request, Response } from 'express'

export class DeleteContactController {

  constructor(
    private readonly deleteContact: DeleteContact
  ) { }

  async handle(request: Request<{ id: string }>, response: Response) {
    await this.deleteContact.execute({
      id: request.params.id
    })
    return response.status(204).send()
  }
}
