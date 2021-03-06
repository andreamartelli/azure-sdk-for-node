// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain7792?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Update is not allowed for custom domain.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '109',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '777b41aa-0218-47e8-b37a-2600b5b695dd',
  'x-ms-client-request-id': '484a5e4f-6fdf-42d9-9495-dc3ef5e8ddb3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '240357c0-08fd-49ba-bca3-a7a02002e26a',
  'x-ms-routing-request-id': 'WESTUS:20160302T224825Z:240357c0-08fd-49ba-bca3-a7a02002e26a',
  date: 'Wed, 02 Mar 2016 22:48:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain7792?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Update is not allowed for custom domain.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '109',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '777b41aa-0218-47e8-b37a-2600b5b695dd',
  'x-ms-client-request-id': '484a5e4f-6fdf-42d9-9495-dc3ef5e8ddb3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '240357c0-08fd-49ba-bca3-a7a02002e26a',
  'x-ms-routing-request-id': 'WESTUS:20160302T224825Z:240357c0-08fd-49ba-bca3-a7a02002e26a',
  date: 'Wed, 02 Mar 2016 22:48:25 GMT',
  connection: 'close' });
 return result; }]];