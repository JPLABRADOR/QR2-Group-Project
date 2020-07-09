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
    verifyPage: function(data) {
        this
            .waitForElementVisible(data.actor, "Verified: " + data.actor + " page link visible")
            .click(data.actor)
            .waitForElementVisible(data.actorPageHeader, "Verified: " + data.actorPageHeader + " page header visible")
            .verify.containsText(data.actorPageHeader, data.actorPageHeaderText, "Verified: " + data.actorPageHeaderText + " Page")
            .api.back()
        this
            .waitForElementVisible(data.poster, "Verified: Back to the Future poster visible")
            .verify.attributeContains(data.poster, 'title', data.posterTitle, "Verified: Back to the Future Page")
        return this
    },
    futurE: function(data){
        this
            .expect.element(data.sect).text.contain(data.ttl)
        return this
    },
    
    btfMenuTest: function(data){
        this
            .navigate('https://www.imdb.com/title/tt0088763/?ref_=ttfc_fc_tt')
            .click('@castAndCrew')
            .verify.containsText('body', 'Full Cast & Crew')
            .click('a[href="/title/tt0088763/?ref_=ttfc_fc_tt"]')
            .click('@trivia')
            .verify.containsText('body', 'Trivia')
            .click('a[href="/title/tt0088763/?ref_=tttr_tr_tt"]')
            .click('@userReviews')
            .verify.containsText('body', 'User Reviews')
            .click('a[href="/title/tt0088763/?ref_=tt_urv"]')
            .click('@imdbPRO')
            .verify.containsText('@verifyIMDbPro', "IMDbPro")
            .navigate('https://www.imdb.com/title/tt0088763/?ref_=ttfc_fc_tt')
            .pause('2000')
            .click('@more')
            .verify.containsText('body', 'DETAILS')
            .verify.containsText('body', 'STORYLINE')
            .verify.containsText('body', 'RELATED ITEMS')
            .verify.containsText('body', 'OPINION')
            .verify.containsText('body', 'PHOTO & VIDEO')
            .verify.containsText('body', 'DID YOU KNOW?')
            .click('@less')
        return this
 },
 }
  
 module.exports = {
    url: 'https://www.imdb.com/',
    commands: [imdbCommands],
    elements:{
        searchBar: 'input[name="q"]',
        submit: 'button[type="submit"]',
        castAndCrew: 'a[href="/title/tt0088763/fullcredits?ref_=tt_ql_1"]',
        trivia: 'a[href="/title/tt0088763/trivia?ref_=tt_ql_2"]',
        userReviews: 'a[href="/title/tt0088763/reviews?ref_=tt_ql_3"]',
        more: 'span[class="titleOverviewSprite quicklinksArrowUp"]',
        less: 'span[class="titleOverviewSprite quicklinksArrowDown"]',
  
        imdbPRO: {
            selector: '//a[contains(text(), "IMDbPro")]',
            locateStrategy: 'xpath'
        },
  
        verifyIMDbPro: {
            selector: '//p[contains(text(), "IMDbPro")]',
            locateStrategy: 'xpath'
        },
  
        firstResult: {
            selector: '(//td[@class="result_text"]/a)[1]',
            locateStrategy: 'xpath'
        },
        title:{
            selector: '//div[@class="title_wrapper"]/h1',
            locateStrategy: 'xpath'
  
        },
        castSectionHeader: {
            selector: "//h2[contains(text(),'Cast')]",
            locateStrategy: 'xpath'
        },
        mainPagePoster: {
            selector: "//img[@title='Back to the Future Poster']",
            locateStrategy: 'xpath'
        },
        michaelJFox: {
            selector: "//tr[@class='odd']//a[contains(text(),'Michael J. Fox')]",
            locateStrategy: 'xpath'
        },
        michaelJFoxPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Michael J. Fox')]",
            locateStrategy: 'xpath'
        },
        christopherLloyd: {
            selector: "//tr[@class='even']//a[contains(text(),'Christopher Lloyd')]",
            locateStrategy: 'xpath'
        },
        christopherLloydPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Christopher Lloyd')]",
            locateStrategy: 'xpath'
        },
        leaThompson: {
            selector: "//tr[@class='odd']//a[contains(text(),'Lea Thompson')]",
            locateStrategy: 'xpath'
        },
        leaThompsonPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Lea Thompson')]",
            locateStrategy: 'xpath'
        },
        crispinGlover: {
            selector: "//tr[@class='even']//a[contains(text(),'Crispin Glover')]",
            locateStrategy: 'xpath'
        },
        crispinGloverPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Crispin Glover')]",
            locateStrategy: 'xpath'
        },
        thomasFWilson: {
            selector: "//tr[@class='odd']//a[contains(text(),'Thomas F. Wilson')]",
            locateStrategy: 'xpath'
        },
        thomasFWilsonPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Thomas F. Wilson')]",
            locateStrategy: 'xpath'
        },
        claudiaWells: {
            selector: "//tr[@class='even']//a[contains(text(),'Claudia Wells')]",
            locateStrategy: 'xpath'
        },
        claudiaWellsPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Claudia Wells')]",
            locateStrategy: 'xpath'
        },
        marcMcClure: {
            selector: "//tr[@class='odd']//a[contains(text(),'Marc McClure')]",
            locateStrategy: 'xpath'
        },
        marcMcClurePageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Marc McClure')]",
            locateStrategy: 'xpath'
        },
        wendieJoSperber: {
            selector: "//tr[@class='even']//a[contains(text(),'Wendie Jo Sperber')]",
            locateStrategy: 'xpath'
        },
        wendieJoSperberPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Wendie Jo Sperber')]",
            locateStrategy: 'xpath'
        },
        georgeDiCenzo: {
            selector: "//tr[@class='odd']//a[contains(text(),'George DiCenzo')]",
            locateStrategy: 'xpath'
        },
        georgeDiCenzoPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'George DiCenzo')]",
            locateStrategy: 'xpath'
        },
        francesLeeMcCain: {
            selector: "//tr[@class='even']//a[contains(text(),'Frances Lee McCain')]",
            locateStrategy: 'xpath'
        },
        francesLeeMcCainPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Frances Lee McCain')]",
            locateStrategy: 'xpath'
        },
        jamesTolkan: {
            selector: "//tr[@class='odd']//a[contains(text(),'James Tolkan')]",
            locateStrategy: 'xpath'
        },
        jamesTolkanPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'James Tolkan')]",
            locateStrategy: 'xpath'
        },
        jJCohen: {
            selector: "//tr[@class='even']//a[contains(text(),'J.J. Cohen')]",
            locateStrategy: 'xpath'
        },
        jJCohenPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'J.J. Cohen')]",
            locateStrategy: 'xpath'
        },
        caseySiemaszko: {
            selector: "//tr[@class='odd']//a[contains(text(),'Casey Siemaszko')]",
            locateStrategy: 'xpath'
        },
        caseySiemaszkoPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Casey Siemaszko')]",
            locateStrategy: 'xpath'
        },
        billyZane: {
            selector: "//tr[@class='even']//a[contains(text(),'Billy Zane')]",
            locateStrategy: 'xpath'
        },
        billyZanePageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Billy Zane')]",
            locateStrategy: 'xpath'
        },
        harryWatersJr: {
            selector: "//tr[@class='odd']//a[contains(text(),'Harry Waters Jr.')]",
            locateStrategy: 'xpath'
        },
        harryWatersJrPageHeader: {
            selector: "//h1[@class='header']//span[contains(text(),'Harry Waters Jr.')]",
            locateStrategy: 'xpath'
        },
  
        // Characters
        martyMcFly: {
            selector: "//tr[@class='odd']//a[contains(text(),'Marty McFly')]",
            locateStrategy: 'xpath'
        },
        martyMcFlyPageHeader: {
            selector: "//h1[contains(text(),'Michael J. Fox: Marty McFly')]",
            locateStrategy: 'xpath'
        },
        drEmmettBrown: {
            selector: "//tr[@class='even']//a[contains(text(),'Dr. Emmett Brown')]",
            locateStrategy: 'xpath'
        },
        drEmmettBrownPageHeader: {
            selector: "//h1[contains(text(),'Christopher Lloyd: Dr. Emmett Brown')]",
            locateStrategy: 'xpath'
        },
        lorraineBaines: {
            selector: "//tr[@class='odd']//a[contains(text(),'Lorraine Baines')]",
            locateStrategy: 'xpath'
        },
        lorraineBainesPageHeader: {
            selector: "//h1[contains(text(),'Lea Thompson: Lorraine Baines')]",
            locateStrategy: 'xpath'
        },
        georgeMcFly: {
            selector: "//tr[@class='even']//a[contains(text(),'George McFly')]",
            locateStrategy: 'xpath'
        },
        georgeMcFlyPageHeader: {
            selector: "//h1[contains(text(),'Crispin Glover: George McFly')]",
            locateStrategy: 'xpath'
        },
        biffTannen: {
            selector: "//tr[@class='odd']//a[contains(text(),'Biff Tannen')]",
            locateStrategy: 'xpath'
        },
        biffTannenPageHeader: {
            selector: "//h1[contains(text(),'Thomas F. Wilson: Biff Tannen')]",
            locateStrategy: 'xpath'
        },
        jenniferParker: {
            selector: "//tr[@class='even']//a[contains(text(),'Jennifer Parker')]",
            locateStrategy: 'xpath'
        },
        jenniferParkerPageHeader: {
            selector: "//h1[contains(text(),'Claudia Wells: Jennifer Parker')]",
            locateStrategy: 'xpath'
        },
        daveMcFly: {
            selector: "//tr[@class='odd']//a[contains(text(),'Dave McFly')]",
            locateStrategy: 'xpath'
        },
        daveMcFlyPageHeader: {
            selector: "//h1[contains(text(),'Marc McClure: Dave McFly')]",
            locateStrategy: 'xpath'
        },
        lindaMcFly: {
            selector: "//tr[@class='even']//a[contains(text(),'Linda McFly')]",
            locateStrategy: 'xpath'
        },
        lindaMcFlyPageHeader: {
            selector: "//h1[contains(text(),'Wendie Jo Sperber: Linda McFly')]",
            locateStrategy: 'xpath'
        },
        samBaines: {
            selector: "//tr[@class='odd']//a[contains(text(),'Sam Baines')]",
            locateStrategy: 'xpath'
        },
        samBainesPageHeader: {
            selector: "//h1[contains(text(),'George DiCenzo: Sam Baines')]",
            locateStrategy: 'xpath'
        },
        stellaBaines: {
            selector: "//tr[@class='even']//a[contains(text(),'Stella Baines')]",
            locateStrategy: 'xpath'
        },
        stellaBainesPageHeader: {
            selector: "//h1[contains(text(),'Frances Lee McCain: Stella Baines')]",
            locateStrategy: 'xpath'
        },
        mrStrickland: {
            selector: "//tr[@class='odd']//a[contains(text(),'Mr. Strickland')]",
            locateStrategy: 'xpath'
        },
        mrStricklandPageHeader: {
            selector: "//h1[contains(text(),'James Tolkan: Mr. Strickland')]",
            locateStrategy: 'xpath'
        },
        skinhead: {
            selector: "//tr[@class='even']//a[contains(text(),'Skinhead')]",
            locateStrategy: 'xpath'
        },
        skinheadPageHeader: {
            selector: "//h1[contains(text(),'J.J. Cohen: Skinhead')]",
            locateStrategy: 'xpath'
        },
        threeD: {
            selector: "//tr[@class='odd']//a[contains(text(),'3-D')]",
            locateStrategy: 'xpath'
        },
        threeDPageHeader: {
            selector: "//h1[contains(text(),'Casey Siemaszko: 3-D')]",
            locateStrategy: 'xpath'
        },
        match: {
            selector: "//tr[@class='even']//a[contains(text(),'Match')]",
            locateStrategy: 'xpath'
        },
        matchPageHeader: {
            selector: "//h1[contains(text(),'Billy Zane: Match')]",
            locateStrategy: 'xpath'
        },
        marvinBerry: {
            selector: "//tr[@class='odd']//a[contains(text(),'Marvin Berry')]",
            locateStrategy: 'xpath'
        },
        marvinBerryPageHeader: {
            selector: "//h1[contains(text(),'Harry Waters Jr.: Marvin Berry')]",
            locateStrategy: 'xpath'
        },
      title: 'h1',
        vid: {
            selector: '(//*[h2])[3]',
            locateStrategy: 'xpath'
        },
        pho: {
            selector: '(//*[h2])[4]',
            locateStrategy: 'xpath'
        },
        cast: {
            selector: '(//*[h2])[5]',
            locateStrategy: 'xpath'
        },
        mLT: {
            selector: '(//*[h2])[6]',
            locateStrategy: 'xpath'
        },
        stryL: {
            selector: '(//*[h2])[7]',
            locateStrategy: 'xpath'
        },
        dYK: {
            selector: '(//*[h2])[8]',
            locateStrategy: 'xpath'
        },
        uR: {
            selector: '(//*[h2])[9]',
            locateStrategy: 'xpath'
        },
        fAQ: {
            selector: '(//*[h2])[10]',
            locateStrategy: 'xpath'
        },
        deets: {
            selector: '(//*[h2])[11]',
            locateStrategy: 'xpath'
        },
    }
  
 }
