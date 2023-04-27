import App from './App'
import './index.css'

describe('<App />', () => {
  it('Should count to 10', () => {
    cy.mount(<App />)

    for (let index = 0; index < 10; index++) {
      cy.get('button')
        .click()
        .then(($button) =>
          cy.wrap($button).should('contain.text', `count is ${index + 1}`),
        )
    }
  })
})
