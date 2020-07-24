'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const axios = require("axios")
const netliflyWebook = strapi.config.get("custom.netliflyWebhook")

module.exports = {
    lifecycles: {
      async afterCreate(_, __){
        netliflyWebook && axios.post(netliflyWebook)
      },

      async afterUpdate(_, __, ___){
        netliflyWebook && axios.post(netliflyWebook)
      }
    },
};
