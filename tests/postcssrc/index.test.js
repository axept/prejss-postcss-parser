import { asyncParser } from '../../src'

const rawCSS = `
  button {
    color: #ffffff;
    width: 100px;
    height: 70px;

    &.primary {
      color: red;
    }
  }
`

const expectedJSS = {
  button: {
    color: '#ffffff',
    width: '100px',
    height: '70px',
  },
  'button.primary': {
    color: 'red',
  },
}

beforeAll(() => {
  process.chdir(__dirname)
})

it('should handle postcssrc config', async () => {
  const result = await asyncParser(rawCSS)

  expect(result).toEqual(expectedJSS)
})
