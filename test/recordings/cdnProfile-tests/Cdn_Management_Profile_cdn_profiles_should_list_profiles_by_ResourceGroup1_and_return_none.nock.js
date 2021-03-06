// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '08a88b6e-77f7-45c1-b2a1-f829944a515b',
  'x-ms-client-request-id': '2ad4ab33-3916-44ef-bc44-ef8fc90e67c2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ad111cb6-c405-4acf-b632-9018ebdefdc5',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T231916Z:ad111cb6-c405-4acf-b632-9018ebdefdc5',
  date: 'Wed, 02 Mar 2016 23:19:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '08a88b6e-77f7-45c1-b2a1-f829944a515b',
  'x-ms-client-request-id': '2ad4ab33-3916-44ef-bc44-ef8fc90e67c2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ad111cb6-c405-4acf-b632-9018ebdefdc5',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T231916Z:ad111cb6-c405-4acf-b632-9018ebdefdc5',
  date: 'Wed, 02 Mar 2016 23:19:15 GMT',
  connection: 'close' });
 return result; }]];