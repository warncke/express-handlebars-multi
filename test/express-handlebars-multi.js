'use strict'

const ExpressHandlebarsMulti = require('../lib/express-handlebars-multi')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const assert = chai.assert

describe('express-handlebars-multi', function () {

    beforeEach(function () {
        // reset global data
        ExpressHandlebarsMulti.reset()
    })

    it('should create new handlebars engine', function () {
        // create new engine with default config
        var engine = ExpressHandlebarsMulti()
    })

})