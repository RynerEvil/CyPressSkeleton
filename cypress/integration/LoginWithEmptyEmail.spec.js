/// <reference types="cypress" />

import { LoginPage } from "../Page Object/LoginPage";

describe('LoginWithEmptyEmail', () => {
    const loginPage = new LoginPage()

    it('UnSuccessful Login Attemp with empty email', () => {
        loginPage.navigate()
        .enteremail('')
        .verifyEmptyEmailError()
    })

})