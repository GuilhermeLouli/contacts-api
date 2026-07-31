import { Contact } from "src/domain/entities/contact"

export interface UpdateContact {
  execute(params: UpdateContact.Params): Promise<UpdateContact.Result>
}

export namespace UpdateContact {
  export type Params = {
    id: string
    name: string
    phone: string
  }
  export type Result = Contact
}
