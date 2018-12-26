const requireDirectory = require('require-directory');
const { objReductor } = require('../utils');
const services = requireDirectory(module);

module.exports = objReductor()(services);
