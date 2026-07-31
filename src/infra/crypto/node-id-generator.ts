import { randomUUID } from 'node:crypto'
import { IdGenerator } from 'src/data/protocols/id-generator'

export class NodeCryptoIdGenerator implements IdGenerator {
  generate(): string {
    return randomUUID()
  }
}
