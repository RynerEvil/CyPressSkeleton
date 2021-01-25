/// <reference types="cypress" />

import { AdvanceSearchPage } from "../Page Object/AdvanceSearchPage";

describe('Search Advance', () => {
    const advancesearch = new AdvanceSearchPage()

   
    it('Search And Sort', () => {
        advancesearch.navigate()
        .enterkeyword('apple')
        .selectlanguage('English')
        .clicksearch()
        .sortbyAndVerify('Publication Date')
    })

})