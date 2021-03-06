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
 * Initializes a new instance of the VnetInfo class.
 * @constructor
 * VNETInfo contract. This contract is public and is a stripped down version
 * of VNETInfoInternal
 * @member {string} [vnetResourceId] The vnet resource id
 * 
 * @member {string} [certThumbprint] The client certificate thumbprint
 * 
 * @member {string} [certBlob] A certificate file (.cer) blob containing the
 * public key of the private key used to authenticate a
 * Point-To-Site VPN connection.
 * 
 * @member {array} [routes] The routes that this virtual network connection
 * uses.
 * 
 */
function VnetInfo() {
  VnetInfo['super_'].call(this);
}

util.inherits(VnetInfo, models['Resource']);

/**
 * Defines the metadata of VnetInfo
 *
 * @returns {object} metadata of VnetInfo
 *
 */
VnetInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VnetInfo',
    type: {
      name: 'Composite',
      className: 'VnetInfo',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        vnetResourceId: {
          required: false,
          serializedName: 'properties.vnetResourceId',
          type: {
            name: 'String'
          }
        },
        certThumbprint: {
          required: false,
          serializedName: 'properties.certThumbprint',
          type: {
            name: 'String'
          }
        },
        certBlob: {
          required: false,
          serializedName: 'properties.certBlob',
          type: {
            name: 'String'
          }
        },
        routes: {
          required: false,
          serializedName: 'properties.routes',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VnetRouteElementType',
                type: {
                  name: 'Composite',
                  className: 'VnetRoute'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VnetInfo;
