export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "serverless-notes-uploads-stockx"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://fxgmd2sr2d.execute-api.us-east-2.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_gilh9CfID",
    APP_CLIENT_ID: "q4jjm6blnvn2cbpulvc52b9vo",
    IDENTITY_POOL_ID: "us-east-2:6f5cf3a8-3af7-47a1-ab28-8cf1c21df5b2"
  }
};
