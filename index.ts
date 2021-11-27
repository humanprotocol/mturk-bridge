require('dotenv').config();
const AWS = require('aws-sdk');
const region = 'us-east-1';

AWS.config = {
    "accessKeyId": process.env.aws_access_key_id,
    "secretAccessKey": process.env.aws_secret_access_key,
    "region": region,
    "sslEnabled": 'true'
};

const endpoint = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com';

const mturk = new AWS.MTurk({ endpoint: endpoint });

// This will return $10,000.00 in the MTurk Developer Sandbox
mturk.getAccountBalance(function(err: any, data: any){
    if(err){
        console.log(err);
    }
    console.log(data);
});