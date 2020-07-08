var imdbCommands = {
    searchTest: function(data){
        this
        .navigate()
        .setValue('@searchBar' , 'Back to the Future')
        .click('@submit')
        .assert.containsText('@firstResult' , 'Back to the Future')
        .click('@firstResult')
        .assert.containsText('@title' , 'Back to the Future (1985)')
        return this
    },
}

module.exports = {
    url: 'https://www.imdb.com/',
    commands: [imdbCommands],
    elements:{
        searchBar: 'input[name="q"]',
        submit: 'button[type="submit"]',
        firstResult: {
            selector: '(//td[@class="result_text"]/a)[1]',
            locateStrategy: 'xpath'
        },
        title:{
            selector: '//div[@class="title_wrapper"]/h1',
            locateStrategy: 'xpath'

        },
    }

}