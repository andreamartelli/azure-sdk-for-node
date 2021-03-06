// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup1784/providers/Microsoft.Storage/storageAccounts/testacc3906?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/operations/be5252c1-c307-4d80-909b-81974b9ace98?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '65405cbc-b81a-4450-a10d-c0f0360b118b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '65405cbc-b81a-4450-a10d-c0f0360b118b',
  'x-ms-routing-request-id': 'WESTUS:20151208T013952Z:65405cbc-b81a-4450-a10d-c0f0360b118b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:39:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup1784/providers/Microsoft.Storage/storageAccounts/testacc3906?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/operations/be5252c1-c307-4d80-909b-81974b9ace98?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '65405cbc-b81a-4450-a10d-c0f0360b118b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '65405cbc-b81a-4450-a10d-c0f0360b118b',
  'x-ms-routing-request-id': 'WESTUS:20151208T013952Z:65405cbc-b81a-4450-a10d-c0f0360b118b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:39:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/operations/be5252c1-c307-4d80-909b-81974b9ace98?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"West US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '103',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'edf89a91-09c4-40da-ac81-ee58cc316000',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'edf89a91-09c4-40da-ac81-ee58cc316000',
  'x-ms-routing-request-id': 'WESTUS:20151208T014018Z:edf89a91-09c4-40da-ac81-ee58cc316000',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:40:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/operations/be5252c1-c307-4d80-909b-81974b9ace98?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"West US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '103',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'edf89a91-09c4-40da-ac81-ee58cc316000',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'edf89a91-09c4-40da-ac81-ee58cc316000',
  'x-ms-routing-request-id': 'WESTUS:20151208T014018Z:edf89a91-09c4-40da-ac81-ee58cc316000',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:40:18 GMT',
  connection: 'close' });
 return result; }]];