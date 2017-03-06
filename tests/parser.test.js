import { syncParser, asyncParser } from '../src'
import nested from 'postcss-nested'

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
    plugins: [nested]
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