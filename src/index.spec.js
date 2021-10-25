import { screen } from '@testing-library/react'

describe('index.tsx', () => {
  test('app renders without crashing', () => {
    import('./index.tsx')

    const homeText = screen.getByText(/hello/i)

    expect(homeText).toBeInTheDocument()
  })
})
