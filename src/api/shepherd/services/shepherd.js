'use strict';

/**
 * shepherd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shepherd.shepherd');
