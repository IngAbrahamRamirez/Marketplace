import React from 'react'
import Carrito from './Carrito'

describe('<Carrito />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Carrito />)
  })
})