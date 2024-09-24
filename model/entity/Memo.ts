export class Memo {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  constructor(args: {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
  }) {
    const { id, title, content, createdAt, updatedAt } = args
    this.id = id
    this.title = title
    this.content = content
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
