import { Contact } from "src/domain/entities/contact"

export interface CreateContact {
  execute(params: CreateContact.Params): Promise<CreateContact.Result>
}

export namespace CreateContact {
  export type Params = {
    name: string
    phone: string
  }
  export type Result = Contact
}
