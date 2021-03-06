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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlTypeList class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL type item list.
 * @member {array} [value] Gets the list of types in the database and schema
 * combination
 * 
 */
function USqlTypeList() {
}

util.inherits(USqlTypeList, Array);

/**
 * Defines the metadata of USqlTypeList
 *
 * @returns {object} metadata of USqlTypeList
 *
 */
USqlTypeList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlTypeList',
    type: {
      name: 'Composite',
      className: 'USqlTypeList',
      modelProperties: {
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'USqlTypeElementType',
                type: {
                  name: 'Composite',
                  className: 'USqlType'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = USqlTypeList;
