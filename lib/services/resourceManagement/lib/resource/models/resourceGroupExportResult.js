/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResourceGroupExportResult class.
 * @constructor
 * @member {object} [template] Gets or sets the template content.
 * 
 * @member {object} [error] Gets or sets the error.
 * 
 * @member {array} [error.details] Gets or sets validation error.
 * 
 */
function ResourceGroupExportResult() {
}

/**
 * Defines the metadata of ResourceGroupExportResult
 *
 * @returns {object} metadata of ResourceGroupExportResult
 *
 */
ResourceGroupExportResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceGroupExportResult',
    type: {
      name: 'Composite',
      className: 'ResourceGroupExportResult',
      modelProperties: {
        template: {
          required: false,
          serializedName: 'template',
          type: {
            name: 'Object'
          }
        },
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'ResourceManagementErrorWithDetails'
          }
        }
      }
    }
  };
};

module.exports = ResourceGroupExportResult;
