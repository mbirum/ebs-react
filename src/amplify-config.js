const amplifyconfig = {
    "aws_project_region": "us-east-2",
    "aws_appsync_graphqlEndpoint": `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`,
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": `${process.env.REACT_APP_GRAPHQL_API_KEY}`
};


export default amplifyconfig;
