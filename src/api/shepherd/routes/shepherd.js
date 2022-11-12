'use strict';

/**
 * shepherd router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shepherd.shepherd');
