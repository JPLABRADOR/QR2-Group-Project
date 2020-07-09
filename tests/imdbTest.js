var iObjects = {}
var actorData = require('../pageAssets/backToTheFutureArray'),
var array = require('../pageAssets/imdbAssestsTrevor')

 
 
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
   'BTS Menu Test': browser => {
       iObjects.btfMenuTest()
   },
  'Future Test': browser =>{
        array.forEach(test => {
            iObjects.futurE(test)
        })
    }
}