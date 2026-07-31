import { Contact } from "src/domain/entities/contact"

export interface ContactRepository {
  create(params: ContactRepository.CreateParams): Promise<Contact>
  read(): Promise<Contact[]>
  update(params: ContactRepository.UpdateParams): Promise<Contact>
  delete(params: ContactRepository.DeleteParams): Promise<void>
}

export namespace ContactRepository {
  export type CreateParams = {
    name: string
    phone: string
  }

  export type UpdateParams = {
    id: string
    name: string
    phone: string
  }

  export type DeleteParams = {
    id: string
  }
}
