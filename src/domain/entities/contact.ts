import { ValidationError } from "../errors/validation-error"

export class Contact {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly phone: string
  ) {
    this.validate()
  }

  private validate(): void {
    let validations: string[] = []

    let splitName = this.name.split(" ")

    if(splitName.length < 2) validations.push("Nome precisa conter no mínimo duas palavras.")

    for(let i = 0; i < splitName.length; i++) {
      if(splitName[i].length < 3) {
        validations.push("Os nomes precisam conter no mínimo 3 letras cada.")
        break;
      }
    }

    if(validations.length > 0) throw new ValidationError(validations.join("\n"))
  }
}
