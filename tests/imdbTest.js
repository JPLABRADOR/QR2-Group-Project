var array = require('../pageAssets/imdbAssestsTrevor')
var future = {}
module.exports = {
    before: browser => {
        future = browser.page.imdbObjects()
        future 
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },

    'Future Test': browser =>{
        array.forEach(test => {
            future.futurE(test)
        })
    },
}