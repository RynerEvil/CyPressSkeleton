/// <reference types="cypress" />

import { LoginPage } from "../Page Object/LoginPage";

describe('LoginWithEmptyEmail', () => {
    const loginPage = new LoginPage()

   
    it('Successful Login with Valid Credentials', () => {
        loginPage.navigate()
        .enteremail('hoangan012579@gmail.com')
        .enterpwd('Anh012579')
        .verifyloginSuccessful()
    })

})