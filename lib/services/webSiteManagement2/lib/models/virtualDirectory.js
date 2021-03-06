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

/**
 * @class
 * Initializes a new instance of the VirtualDirectory class.
 * @constructor
 * @member {string} [virtualPath]
 * 
 * @member {string} [physicalPath]
 * 
 */
function VirtualDirectory() {
}

/**
 * Defines the metadata of VirtualDirectory
 *
 * @returns {object} metadata of VirtualDirectory
 *
 */
VirtualDirectory.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualDirectory',
    type: {
      name: 'Composite',
      className: 'VirtualDirectory',
      modelProperties: {
        virtualPath: {
          required: false,
          serializedName: 'virtualPath',
          type: {
            name: 'String'
          }
        },
        physicalPath: {
          required: false,
          serializedName: 'physicalPath',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VirtualDirectory;
