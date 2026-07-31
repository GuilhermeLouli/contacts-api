export interface DeleteContact {
  execute(params: DeleteContact.Params): Promise<void>
}

export namespace DeleteContact {
  export type Params = {
    id: string
  }
}
