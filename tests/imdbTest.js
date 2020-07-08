var iObjects = {}
var actorData = require('../pageAssets/backToTheFutureArray')


module.exports ={
    beforeEach: browser =>{
        iObjects = browser.page.imdbObjects()
        iObjects.maximizeWindow()
        iObjects.navigate()
    },
    afterEach: browser =>{
        browser.end
    },
    'Search Test': browser =>{
        iObjects.searchTest()
    },
    'Test - Verify Cast Section': browser => {
        actorData.forEach(test => {
            iObjects
                .verifyPage(test)
        })
    }
}