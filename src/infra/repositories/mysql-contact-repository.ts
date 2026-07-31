import { ContactRepository } from 'src/data/protocols/contact-repository'
import { Contact } from 'src/domain/entities/contact'
import { IdGenerator } from 'src/data/protocols/id-generator'
import { mysqlConnection } from '../databases/mysql'

export class MysqlContactRepository implements ContactRepository {

  constructor(private readonly idGenerator: IdGenerator) {}

  async create(params: ContactRepository.CreateParams) {
    const id = this.idGenerator.generate()

    await mysqlConnection.execute(
      `
      INSERT INTO contacts (id, name, phone)
      VALUES (?, ?, ?)
      `,
      [id, params.name, params.phone]
    )

    return new Contact(
      id,
      params.name,
      params.phone
    )
  }

  async read(): Promise<Contact[]> {
    const [rows] = await mysqlConnection.execute(
      `
      SELECT * FROM contacts
      `
    )

    return (rows as Contact[]).map(row =>
      new Contact(
        row.id,
        row.name,
        row.phone
      )
    )
  }

  async update(params: ContactRepository.UpdateParams): Promise<Contact> {

    await mysqlConnection.execute(
      `
      UPDATE contacts
      SET name = ?, phone = ?
      WHERE id = ?
      `,
      [params.name, params.phone, params.id]
    )

    return new Contact(
      params.id,
      params.name,
      params.phone
    )
  }

  async delete(params: ContactRepository.DeleteParams): Promise<void> {

    await mysqlConnection.execute(
      `
      DELETE FROM contacts
      WHERE id = ?
      `,
      [params.id]
    )
  }
}
