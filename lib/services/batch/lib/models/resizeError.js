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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResizeError class.
 * @constructor
 * An error that occurred when resizing a pool.
 * @member {string} [code] Gets or sets an identifier for the pool resize
 * error.  Codes are invariant and are intended to be consumed
 * programmatically.
 * 
 * @member {string} [message] Gets or sets a message describing the pool
 * resize error, intended to be suitable for display in a user interface.
 * 
 * @member {array} [values] Gets or sets a list of additional error details
 * related to the pool resize error.
 * 
 */
function ResizeError() {
}

/**
 * Defines the metadata of ResizeError
 *
 * @returns {object} metadata of ResizeError
 *
 */
ResizeError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResizeError',
    type: {
      name: 'Composite',
      className: 'ResizeError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        values: {
          required: false,
          serializedName: 'values',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'NameValuePairElementType',
                type: {
                  name: 'Composite',
                  className: 'NameValuePair'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ResizeError;
