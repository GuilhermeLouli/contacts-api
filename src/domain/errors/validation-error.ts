export class ValidationError extends Error {
  constructor(public readonly error: string) {
    super(error)
    this.name = "ValidationError"
  }
}