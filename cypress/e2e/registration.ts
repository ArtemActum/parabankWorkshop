import RegisterPage from '../page-object/registerPage'

const registerPage = new RegisterPage()

describe('Registrations tests', () => {
	it('Registration', () => {
		const randomNumber = Math.floor(Math.random() * 100) + 1
		const email = `parabank-${randomNumber}@yopmail.com`
		cy.log(`Generated email: ${email}`)

		registerPage.open()
		registerPage.register(email, 'Test1234')
	})

	it('Negative registration test', () => {
		cy.visit('https://parabank.parasoft.com/parabank/index.htm')
		cy.get('#loginPanel > :nth-child(3) > a').click()
		cy.get("input[id='customer.firstName']").type('12312')
		cy.get("input[id='customer.lastName']").type('Lastname')
		cy.get("input[id='customer.address.street']").type('address')
		cy.get("input[id='customer.address.city']").type('city')
		cy.get("input[id='customer.address.state']").type('state')
		cy.get("input[id='customer.address.zipCode']").type('ZipCode')
		cy.get("input[id='customer.phoneNumber']").type('1111')
		cy.get("input[id='customer.ssn']").type('1111')
		cy.get("input[id='customer.username']").type('parabank-1@yopmail.com')
		cy.get("input[id='customer.password']").type('Test1234')
		cy.get("input[id='repeatedPassword']").type('Test1234')
		cy.get("input[value='Register']").click()
	})
})
