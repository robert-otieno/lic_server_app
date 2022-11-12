'use strict';

/**
 * shepherd controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::shepherd.shepherd');
