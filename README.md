# Education-Project


Currently the project is deployed off of branch "testing-amplify" on aws amplify at: https://testing-amplify.d5nsu3vq8amjd.amplifyapp.com

There is a basic login connected in this website example

When attempting to connect a rds database to amplify I found out that aws is now considering this connection to be legacy code and switching to focusing on only connecting amplify with no-sql dynamodb

So my next steps are working on connecting the project to aws Elastic Beanstalk using node.js and express. Then I will be able to connect EB with a rds. This part of the project will be shown and deployed on the branch "testing-eb"


To run the project locally, clone, then to run client cd client folder, npm install, npm start. To run the server, cd server then npm install, npm start

