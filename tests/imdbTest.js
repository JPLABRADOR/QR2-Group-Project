var iObjects = {}

module.exports ={
    beforeEach: browser =>{
        iObjects = browser.page.imdbObjects()
        iObjects.navigate
    },
    afterEach: browser =>{
        browser.end
    },
    'Search Test': browser =>{
        iObjects.searchTest()
    }
}