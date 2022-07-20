import { greetings } from './teste'

describe('teste', () => {
  it('should return message', () => {
    const result = greetings('Abel')

    expect(result).toStrictEqual('Hello Abel!!')
  })
})
