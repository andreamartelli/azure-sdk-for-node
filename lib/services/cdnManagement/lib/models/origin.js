/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Origin class.
 * @constructor
 * CDN Origin is the source of the content being delivered via CDN. When the
 * edge nodes represented by an Endpoint do not have the requested content
 * cached, they attempt to fetch it from one or more of the configured
 * Origins.
 * @member {string} hostName The host name of the origin
 * 
 * @member {number} [httpPort] The value of the http port, must be between 1
 * and 65535
 * 
 * @member {number} [httpsPort] The value of the https port, must be between 1
 * and 65535
 * 
 * @member {string} [resourceState] Resource status of the origin. Possible
 * values include: 'Creating', 'Active', 'Deleting'
 * 
 * @member {string} [provisioningState] Provisioning status of the origin.
 * Possible values include: 'Creating', 'Succeeded', 'Failed'
 * 
 */
function Origin() {
  Origin['super_'].call(this);
}

util.inherits(Origin, models['Resource']);

/**
 * Defines the metadata of Origin
 *
 * @returns {object} metadata of Origin
 *
 */
Origin.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Origin',
    type: {
      name: 'Composite',
      className: 'Origin',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        hostName: {
          required: true,
          serializedName: 'properties.hostName',
          type: {
            name: 'String'
          }
        },
        httpPort: {
          required: false,
          serializedName: 'properties.httpPort',
          type: {
            name: 'Number'
          }
        },
        httpsPort: {
          required: false,
          serializedName: 'properties.httpsPort',
          type: {
            name: 'Number'
          }
        },
        resourceState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.resourceState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Creating', 'Active', 'Deleting' ]
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Creating', 'Succeeded', 'Failed' ]
          }
        }
      }
    }
  };
};

module.exports = Origin;
