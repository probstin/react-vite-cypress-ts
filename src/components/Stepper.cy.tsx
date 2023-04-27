import Stepper from './Stepper'

describe('Stepper', () => {
  const incrementButton = '[data-cy=increment]'
  const decrementButton = '[data-cy=decrement]'
  const counterText = '[data-cy=counter]'

  it('Should initialize the counter with a default value of 0', () => {
    cy.mount(<Stepper />)
    cy.get(counterText).should('contain.text', 0)
  })

  it('Should initialize the counter with a given value', () => {
    cy.mount(<Stepper initial={100} />)
    cy.get(counterText).should('contain.text', 100)
  })

  it('Should increment the counter', () => {
    cy.mount(<Stepper />)
    cy.get(incrementButton).click()
    cy.get(counterText).should('contain.text', 1)
  })

  it('Should decrement the counter', () => {
    cy.mount(<Stepper />)
    cy.get(decrementButton).click()
    cy.get(counterText).should('contain.text', -1)
  })

  it('Should trigger a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper onChange={onChangeSpy} />)
    cy.get(incrementButton).click()
    cy.get('@onChangeSpy').should('have.been.calledOnceWith', 1)
  })
})
