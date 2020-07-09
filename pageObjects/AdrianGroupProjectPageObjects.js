var Group = {
    AdrianPart: function (asset) {
        this
        .pause(5000)
        .setValue('@searchBarAdrian', asset.search1,)
        .click('@searchButtonAdrian')
        .click('@BacktotheFuturehome1')
        .click('@seeAll7Videos')
        .pause(2000)
        .click('@video1')
        .pause(3000)
        .verify.urlEquals(asset.verifyVideo1)
        .click('@backButton')
        .pause(2000)
        .click('@video2')
        .pause(3000)
        .verify.urlEquals(asset.verifyVideo2)
        .click('@backButton')
        .pause(2000)
        .click('@video3')
        .pause(3000)
        .verify.urlEquals(asset.verifyVideo3)
        .click('@backButton')
        .pause(2000)
        .click('@video4')
        .pause(3000)
        .verify.urlEquals(asset.verifyVideo4)
        .click('@backButton')
        .pause(2000)
        .click('@video5')
        .pause(3000)
        .verify.urlEquals(asset.verifyVideo5)
        .click('@backButton')
        .click('@BacktotheFuturehome1')
        .navigate('https://www.imdb.com/title/tt0088763/mediaindex?ref_=tt_pv_mi_sm')
        .verify.containsText('@VerifySeeAllPhotos', asset.verifyPG)
        .click('@stillFrameFilter')
        .verify.containsText('@currentFilterVerify', asset.verifySF)
        .click('@allFilters')
        .click('@eventFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyE)
        .click('@allFilters')
        .click('@posterFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyPoster)
        .click('@allFilters')
        .click('@productFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyProduct)
        .click('@allFilters')
        .click('@publicityFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyPub)
        .click('@allFilters')
        .click('@behindTheScenesFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyBTS)
        .click('@allFilters')
        .click('@productionArtFilter')
        .verify.containsText('@currentFilterVerify', asset.verifyPA)
        .click('@allFilters')
        .click('@BacktotheFuturehome1')
        return this
    }
}
module.exports = {
    url: 'https://www.imdb.com/',
    commands: [Group],
    elements: {
        searchBarAdrian: 'input[type="text"]',
        searchButtonAdrian: 'button[id="suggestion-search-button"]',
        seeAll7Videos: {
            selector: '//a[contains(text(),"See all 7 videos")]',
            locateStrategy: 'xpath'
        },
        video1: 'img[viconst="vi2099035673"]',
        video2: 'img[viconst="vi3626548249"]',
        video3: 'img[viconst="vi474724633"]',
        video4: 'img[viconst="vi3662328601"]',
        video5: 'img[viconst="vi252380953"]',
        backButton: 'a[aria-label="Back"]',
        seeAllPhotos: {
            selector: '(//div[@id="titleImageStrip"]/*/a)[8]',
            locateStrategy: 'xpath'
        },
        VerifySeeAllPhotos: 'h1[class="header"]',
        stillFrameFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[1]',
            locateStrategy: 'xpath'
        },
        eventFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[2]',
            locateStrategy: 'xpath'
        },
        posterFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[3]',
            locateStrategy: 'xpath'
        },
        productFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[4]',
            locateStrategy:'xpath'
        },
        publicityFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[5]',
            locateStrategy: 'xpath'
        },
        behindTheScenesFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[6]',
            locateStrategy: 'xpath'
        },
        productionArtFilter: {
            selector: '(//div[@id="media_index_type_filters"]/ul/li/a)[7]',
            locateStrategy: 'xpath'
        },
        currentFilterVerify: 'span[id="current_filter"]',
        BacktotheFuturehome1: {
            selector: '(//a[contains(text(),"Back to the Future")])[1]',
            locateStrategy: 'xpath'
        },
        allFilters: {
            selector: '(//a[contains(text(),"All")])[1]',
            locateStrategy: 'xpath'
        }
    }
}
