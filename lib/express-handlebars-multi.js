'use strict'

/* npm modules */
const _ = require('lodash')
const debug = require('debug')('request-handlebars-multi')
const handlebars = require('handlebars')
const mergeArgs = require('merge-args')()

// default configuration
const defaultConfig = {
    // default layout
    defaultLayout: '',
    // default template file extension
    ext: 'hbs',
    // helper functions
    helpers: {},
    // layouts directories
    layouts: [],
    // handlebars options
    options: {},
    // partials directories
    partials: [],
    // templates indexed by absolute file name
    templates: {},
}

/* global singleton data */
var GLOBAL
// initialize global singleton instance if not yet defined
if (!global.__express_handlebars_multi__) {
    reset()
}
// use existing singleton instance
else {
    GLOBAL = global.__express_handlebars_multi__
}

/* exports */
module.exports = ExpressHandlebarsMulti

ExpressHandlebarsMulti.reset = reset

/**
 * @function ExpressHandlebarsMulti
 *
 * @param {object} config
 *
 */
function ExpressHandlebarsMulti (config) {
    // merge config to global config
    mergeArgs(GLOBAL, config)
    // return render function
    return render
}

/**
 * @function render
 *
 * Express view engine render function
 *
 * @param {string} file
 * @param {object} options
 * @param {function} callback
 *
 * @throws {Error}
 */
function render (file, options, callback) {
    debug('render', file, options)
}

/**
 * @function reset
 *
 * reset global singleton data
 */
function reset () {
    GLOBAL = global.__express_handlebars_multi__ = _.cloneDeep(defaultConfig)
}

/* private functions */