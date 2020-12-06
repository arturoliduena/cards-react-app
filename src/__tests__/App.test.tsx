import React from 'react';
import App from '../App';

import { render, fireEvent, screen } from '../test-utils'

it('Renders sorting buttons', () => {
  render(<App />, { initialState: { card: { cards: []} } })
  const buttonASC_DATE = screen.getByText(/asc create date/i)
  const buttonDESC_DATE = screen.getByText(/desc create date/i)
  const buttonASC_TITLE = screen.getByText(/asc title/i)
  const buttonDESC_TITLE = screen.getByText(/desc title/i)
  expect(buttonASC_DATE).toBeInTheDocument()
  expect(buttonDESC_DATE).toBeInTheDocument()
  expect(buttonASC_TITLE).toBeInTheDocument()
  expect(buttonDESC_TITLE).toBeInTheDocument()
});
