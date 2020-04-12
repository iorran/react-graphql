export type IMessage = {
    id: number,
    content: string,
    user: {
      id: number,
      email: string
    }
  }