const AWS = require('aws-sdk')
require('dotenv').config()

AWS.config = new AWS.Config({accessKeyId :  process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: 'us-east-1'});

const s3 = new AWS.S3()

var params = {
  Bucket: process.env.BUCKET,
  Key: "tiger3.svg", 
  ContentType: 'multipart/form-data'
}

s3.getSignedUrl('putObject', params, function(err, url) { 
  if (err){
    console.log('err',': ', err);
  }
  console.log(url);
});
