export class AdvanceSearchPage{
    navigate(){
        cy.visit('Advanced-Search-Books/b/?ie=UTF8&node=241582011&ref_=sv_b_1')
        return this
    }
    enterkeyword(keywords){
        cy.get('form[action="/gp/search/ref=sr_adv_b/"]').within(()=>{
        cy.get('input[name="field-keywords"]').type(keywords)
        })
        return this
    }
    selectlanguage(language){
        cy.get('select[name="field-language"]').select('English').should('have.value','English')
        return this
    }
    clicksearch(){
        cy.get('input[name="Adv-Srch-Books-Submit"]').click()
        cy.wait(5000)
        return this
    }
    verifypaging(num){
        cy.contains('1-'+num+' of over').should('be.visible')
        cy.get('div[data-component-type="s-search-result"]').should('have.length',16)
    }
    sortbyAndVerify(option)
    {
        cy.get('span[class="a-button-text a-declarative"]').contains('Sort by:').click()
        cy.get('a').contains(option).click()
        cy.wait(5000)
        var items =[]
        cy.get('span[class="a-size-base a-color-secondary a-text-normal').each(elements => {       
            items.push(elements.text())     
        }).then(() => {
                let itemsorted = Array.from(items).sort((a, b) => {
                    return Date.parse(b) - Date.parse(a)
                })
                cy.wrap(itemsorted).should('deep.equal',items)
            })
        return  this
    }
}