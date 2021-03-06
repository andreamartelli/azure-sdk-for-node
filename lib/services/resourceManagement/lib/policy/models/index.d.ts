/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the PolicyDefinition class.
 * @constructor
 * The policy definition.
 * @member {string} [policyType] Gets or sets policy definition policy type.
 * Possible values include: 'NotSpecified', 'BuiltIn', 'Custom'
 * 
 * @member {string} [displayName] Gets or sets the policy definition display
 * name.
 * 
 * @member {string} [description] Gets or sets the policy definition
 * description.
 * 
 * @member {object} [policyRule] Gets or sets the policy rule.
 * 
 * @member {string} [name] Gets or sets the name of the policy definition.
 * 
 */
export interface PolicyDefinition extends BaseResource {
    policyType?: string;
    displayName?: string;
    description?: string;
    policyRule?: any;
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the PolicyAssignment class.
 * @constructor
 * The policy definition.
 * @member {string} [displayName] Gets or sets the policy assignment display
 * name.
 * 
 * @member {string} [policyDefinitionId] Gets or sets the policy definition Id.
 * 
 * @member {string} [scope] Gets or sets the scope at which the policy
 * assignment exists.
 * 
 * @member {string} [id] Gets or sets the Id of the policy assignment.
 * 
 * @member {string} [type] Gets or sets the type of the policy assignment.
 * 
 * @member {string} [name] Gets or sets the name of the policy assignment.
 * 
 */
export interface PolicyAssignment extends BaseResource {
    displayName?: string;
    policyDefinitionId?: string;
    scope?: string;
    id?: string;
    type?: string;
    name?: string;
}
