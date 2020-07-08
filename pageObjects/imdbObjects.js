
var futureCommands ={
    futurE: function(data){
        this
            .expect.element(data.sect).text.contain(data.ttl)
        return this
    }
}

module.exports = {
    url: 'https://www.imdb.com/title/tt0088763/?ref_=fn_al_tt_1',
    commands: [futureCommands],
    elements: {
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
        // bOff: {
        //     selector:
        //     locateStrategy: 'xpath'
        // },
        // comCrd: {
        //     selector:
        //     locateStrategy: 'xpath'
        // },
        // techSpc: {
        //     selector:
        //     locateStrategy: 'xpath'
        // }, 
    }
}