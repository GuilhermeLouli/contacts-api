import { Contact } from "src/domain/entities/contact"

export interface ReadContact {
  execute(): Promise<ReadContact.Result>
}

export namespace ReadContact {
  export type Result = Contact[]
}
