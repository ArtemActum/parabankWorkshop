import BasePage from '../page-object/basePage'

const basePage = new BasePage()

describe('Login tests', () => {
	it.skip('login', () => {
		basePage.open()
		basePage.login('parabank-1@yopmail.com', 'Test1234')
		basePage.checkUrlAfterLogin()
	})
})
