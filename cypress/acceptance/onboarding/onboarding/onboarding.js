import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the Influx onboarding page', async () => {
    cy.visit('/')
})

Then('there is a Welcome message', async () => {
    cy.get('[data-testid=init-step--head-main]').should( header => {
        expect(header).to.contain('Welcome')
    })
})

Then('there is a link to corporate', async () => {
    cy.get('[data-testid=credits] a').should(credits => {
        expect(credits).to.contain('InfluxData')
        expect(credits).attr('href').to.equal('https://www.influxdata.com/')
    })
})

When('I click on Get Started', async() => {
    cy.get('[data-testid=onboarding-get-started]').click()
})

Then('the Initial Setup Page is loaded', async () => {
    cy.get('[data-testid=admin-step--head-main]').should( header => {
        expect(header).to.contain('Setup')
    })

    cy.get('[data-testid=nav-step--welcome]').should('have.text', 'Welcome')

    cy.get('[data-testid=nav-step--setup]').should('contain.text', 'Setup')

    cy.get('[data-testid=next]').should('be.disabled')

})


