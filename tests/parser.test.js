import { syncParser, asyncParser } from '../src'

const rawCSS = `
  button {
    color: #ffffff;
    width: 100px;
    height: 70px;
  }
`

const expectedJSS = {
  button: {
    color: '#ffffff',
    width: '100px',
    height: '70px',
  }
}

const options = {
  config: {
    plugins: ['postcss-nested']
  }
}

it('sync parse from plain css to object', () => {
  const result = syncParser(rawCSS, options)

  expect(result).toEqual(expectedJSS)
})

it('async parse from plain css to object', async () => {
  const result = await asyncParser(rawCSS, options)

  expect(result).toEqual(expectedJSS)
})
