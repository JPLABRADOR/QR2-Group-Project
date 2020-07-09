var GroupProject = {}
var asset = require('../pageAssets/AdrianGroupArray')
module.exports = {
    beforeEach: browser => {
        GroupProject = browser.page.AdrianGroupProjectPageObjects()
        GroupProject
            .navigate()
            .maximizeWindow()
    },
    "Videos and Photos": browser=>{
        GroupProject
            .AdrianPart(asset)
    },
}