import parser from '../lib'

const css = `
  button {
    color: #ffffff;
    width: 100px;
    height: 70px;
  }
`

it('parse from plain css to object', () => {
  const result = parser(css)

  expect(result).toEqual({
    button: {
      color: '#ffffff',
      width: '100px',
      height: '70px',
    }
  })
})