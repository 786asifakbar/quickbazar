const axios = require('axios');

const fetchAmazonProducts = async (keyword) => {
  const amazonAccessKey = process.env.AMAZON_ACCESS_KEY;
  const amazonSecretKey = process.env.AMAZON_SECRET_KEY;
  const associateTag = process.env.AMAZON_ASSOCIATE_TAG;
  
  const endpoint = 'webservices.amazon.com';
  const uri = '/onca/xml';
  
  const params = {
    Service: 'AWSECommerceService',
    Operation: 'ItemSearch',
    Keywords: keyword,
    SearchIndex: 'All',
    ResponseGroup: 'Images,ItemAttributes,Offers',
    AssociateTag: associateTag,
    AWSAccessKeyId: amazonAccessKey,
    Timestamp: new Date().toISOString(),
  };

  const signedUrl = generateAmazonSignedUrl(endpoint, uri, params);
  
  try {
    const response = await axios.get(signedUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Amazon:', error);
    return null;
  }
};

const generateAmazonSignedUrl = (endpoint, uri, params) => {
  // This is a placeholder. You need to implement signature generation.
  return `https://${endpoint}${uri}?${new URLSearchParams(params).toString()}`;
};

module.exports = { fetchAmazonProducts };
