import { DynamoDB } from 'aws-sdk';
import { APIGatewayEvent, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    console.log("Received event:", event);

    const routes: { [key: string]: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult> } = {
        'GET /example/path1': handleGetExample,
        'POST /example/path2': handlePostExample,
        'DELETE /example/path3': handleDeleteExample,
    };

    const routeKey = event.httpMethod + ' ' + event.resource;
    const routeHandler = routes[routeKey];

    if (!routeHandler) {
        return {
            statusCode: 404,
            body: JSON.stringify({
                error: 'Route not found',
            }),
        };
    }

    return routeHandler(event);
};

// Example handler functions
const handleGetExample = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Example logic: Add an item to the Sessions table
    const params = {
        TableName: 'Sessions',
        Item: {
            SessionId: 'example-get',
            Data: 'Example data for GET',
        },
    };

    try {
        await dynamoDb.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'GET request processed' }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: 'Could not process GET request' }) };
    }
};

const handlePostExample = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Example logic: Add an item to the Users table
    const params = {
        TableName: 'Users',
        Item: {
            UserId: 'example-post',
            Data: 'Example data for POST',
        },
    };

    try {
        await dynamoDb.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'POST request processed' }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: 'Could not process POST request' }) };
    }
};

const handleDeleteExample = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // Example logic: Add an item to the Options table
    const params = {
        TableName: 'Options',
        Item: {
            OptionID: 'example-delete',
            Data: 'Example data for DELETE',
        },
    };

    try {
        await dynamoDb.put(params).promise();
        return { statusCode: 200, body: JSON.stringify({ message: 'DELETE request processed' }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: 'Could not process DELETE request' }) };
    }
};