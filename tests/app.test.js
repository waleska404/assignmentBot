import { routes, plugins, locales, config } from '../src/'
import {
  BotonicInputTester,
  BotonicOutputTester,
  NodeApp,
} from '@botonic/react'

const app = new NodeApp({ routes, locales, plugins, ...config })

const i = new BotonicInputTester(app)
const o = new BotonicOutputTester(app)

test('TEST: choosen-english.js', async () => {
  await expect(i.payload('english')).resolves.toBe(
      o.text(
          'Great! Hi {this.props.name}, welcome, this is a bot developed ' +
          '(using Botonic) by Paula Boyano as an asignment for Hubtype.' +
          'If you want to know what you can do here, type "help".'
      )
  )
})


test('TEST: (404) NOT FOUND', async () => {
  await expect(i.text('whatever')).resolves.toBe(
    o.text("I don't understand you")
  )
})
