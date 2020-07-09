var iObjects = {}
var actorData = require('../pageAssets/backToTheFutureArray')
var tArray = require('../pageAssets/imdbAssestsTrevor')
var aArray = require('../pageAssets/AdrianGroupArray')

 
 
module.exports ={
   beforeEach: browser =>{
       iObjects = browser.page.imdbObjects()
       iObjects.maximizeWindow()
   },
   afterEach: browser =>{
       browser.end
   },
   'Search Test': browser => {
       iObjects.searchTest()
   },
   'Test - Verify Cast Section': browser => {
       actorData.forEach(test => {
           iObjects
               .verifyPage(test)
       })
   },
    'Future Test': browser =>{
        tArray.forEach(test => {
            iObjects.futurE(test)
        })
    },
    "Videos and Photos": browser=>{
        iObjects.AdrianPart(aArray)
    },
}