import { syncParser, asyncParser } from '../src'

const css = `
  button {
    color: #ffffff;
    width: 100px;
    height: 70px;
  }
`

const objectCss = {
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
  const result = syncParser(css, options)

  expect(result).toEqual(objectCss)
})

it('async parse from plain css to object', async () => {
  const result = await asyncParser(css, options)

  expect(result).toEqual(objectCss)
})
