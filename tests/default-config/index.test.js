import { asyncParser } from '../../src'

const css = `
  button {
    color: #ffffff;
    width: 100px;
    height: 70px;

    &.primary {
      color: red;
    }
  }
`

const objectCss = {
  button: {
    color: '#ffffff',
    width: '100px',
    height: '70px',
    '&.primary': {
      color: 'red',
    },
  },
}

beforeAll(() => {
  process.chdir(__dirname)
})

it('should handle default config', async () => {
  const result = await asyncParser(css)

  expect(result).toEqual(objectCss)
})
