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
 * Initializes a new instance of the NetworkInterfaceDnsSettings class.
 * @constructor
 * Dns Settings of a network interface
 * @member {array} [dnsServers] Gets or sets list of DNS servers IP addresses
 * 
 * @member {array} [appliedDnsServers] Gets or sets list of Applied DNS
 * servers IP addresses
 * 
 * @member {string} [internalDnsNameLabel] Gets or sets the Internal DNS name
 * 
 * @member {string} [internalFqdn] Gets or sets full IDNS name in the form,
 * DnsName.VnetId.ZoneId.TopleveSuffix. This is set when the NIC is
 * associated to a VM
 * 
 */
function NetworkInterfaceDnsSettings() {
}

/**
 * Defines the metadata of NetworkInterfaceDnsSettings
 *
 * @returns {object} metadata of NetworkInterfaceDnsSettings
 *
 */
NetworkInterfaceDnsSettings.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NetworkInterfaceDnsSettings',
    type: {
      name: 'Composite',
      className: 'NetworkInterfaceDnsSettings',
      modelProperties: {
        dnsServers: {
          required: false,
          serializedName: 'dnsServers',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        appliedDnsServers: {
          required: false,
          serializedName: 'appliedDnsServers',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        internalDnsNameLabel: {
          required: false,
          serializedName: 'internalDnsNameLabel',
          type: {
            name: 'String'
          }
        },
        internalFqdn: {
          required: false,
          serializedName: 'internalFqdn',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NetworkInterfaceDnsSettings;
