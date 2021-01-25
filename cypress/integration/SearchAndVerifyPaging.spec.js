/// <reference types="cypress" />

import { AdvanceSearchPage } from "../Page Object/AdvanceSearchPage";

describe('Search Advance', () => {
    const advancesearch = new AdvanceSearchPage()

   
    it('Search And Verify Paging', () => {
        advancesearch.navigate()
        .enterkeyword('apple')
        .selectlanguage('English')
        .clicksearch()
        .verifypaging(16)
    })

})