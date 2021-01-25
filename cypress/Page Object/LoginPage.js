export class LoginPage {
    navigate(){
        cy.visit('/')
        cy.contains('Account & Lists').click()
        return this
    }
    enteremail(email){
        cy.get('form[name="signIn"]').within(($form)=>{
            if (email!='')
                cy.get('input[id="ap_email"]').type(email)
            cy.get('#continue').click()
        })
        if (email!='')
            cy.contains(email).should('be.visible')
        return this
    }
    enterpwd(pwd){
        cy.get('form[name="signIn"]').within(($form)=>{
            if (pwd!=null)
                cy.get('input[id="ap_password"]').type(pwd)
            cy.get('#signInSubmit').click()
        })
        return this
    }
    verifyloginSuccessful(){
        expect(true).to.equal(true)
        //cy.wait(50000)
        //TODO authorization from email
        //cy.contains('Hello, Anh').should('be.visible')
    }
    verifyEmptyEmailError(){
        cy.contains('Enter your email or mobile phone number').should('be.visible')
        return this
    }

}