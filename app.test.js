const request = require('supertest');
const express = require('express');

// Import your app logic or create an instance for testing
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'DevOps Project 1 Microservice is Live!'
    });
});

describe('GET / Endpoint', () => {
    it('should return 200 OK and success status', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });
});