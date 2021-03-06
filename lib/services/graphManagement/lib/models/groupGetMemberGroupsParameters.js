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
 * Initializes a new instance of the GroupGetMemberGroupsParameters class.
 * @constructor
 * Request parameters for GetMemberGroups API call
 * @member {boolean} securityEnabledOnly If true only membership in security
 * enabled groups should be checked. Otherwise membership in all groups
 * should be checked
 * 
 */
function GroupGetMemberGroupsParameters() {
}

/**
 * Defines the metadata of GroupGetMemberGroupsParameters
 *
 * @returns {object} metadata of GroupGetMemberGroupsParameters
 *
 */
GroupGetMemberGroupsParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GroupGetMemberGroupsParameters',
    type: {
      name: 'Composite',
      className: 'GroupGetMemberGroupsParameters',
      modelProperties: {
        securityEnabledOnly: {
          required: true,
          serializedName: 'securityEnabledOnly',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = GroupGetMemberGroupsParameters;
