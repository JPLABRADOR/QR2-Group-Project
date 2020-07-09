var GroupProject = {}
var asset = require('../codeAbstact/AdrianGroupArray')
module.exports = {
    beforeEach: browser => {
        GroupProject = browser.page.AdrianGroupProjectPageObjects()
        GroupProject
            .navigate()
    },
    "Videos and Photos": browser=>{
        GroupProject
            .AdrianPart(asset)
    },
}