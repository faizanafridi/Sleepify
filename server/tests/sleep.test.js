const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const Sleep = require('../models/sleepDataModel');
const User = require('../models/userModel');
const sleepRoutes = require('../routes/sleep');

let mongoServer;
const app = express();
app.use(express.json());
app.use('/api/sleep', sleepRoutes);

// Mock the authentication middleware
jest.mock('../middlewares/authMiddleWare', () => ({
  fetchUser: (req, res, next) => {
    req.user = {
      _id: '507f1f77bcf86cd799439011',
      name: 'Test User',
      email: 'test@example.com'
    };
    next();
  }
}));

describe('Sleep Routes', () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Sleep.deleteMany({});
    await User.deleteMany({});
  });

  describe('POST /api/sleep/add', () => {
    it('should create a new sleep record', async () => {
      const sleepData = {
        startTime: '22:00',
        endtime: '06:00'
      };

      const response = await request(app)
        .post('/api/sleep/add')
        .send(sleepData);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('aSleepTime', sleepData.startTime);
      expect(response.body).toHaveProperty('wakeUpTime', sleepData.endtime);
      expect(response.body).toHaveProperty('hours', 8);
    });

    it('should handle invalid time format', async () => {
      const sleepData = {
        startTime: 'invalid',
        endtime: '06:00'
      };

      const response = await request(app)
        .post('/api/sleep/add')
        .send(sleepData);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('should calculate hours correctly when sleep spans midnight', async () => {
      const sleepData = {
        startTime: '23:00',
        endtime: '05:00'
      };

      const response = await request(app)
        .post('/api/sleep/add')
        .send(sleepData);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('hours', 6);
    });
  });

  describe('DELETE /api/sleep/remove', () => {
    it('should delete a sleep record', async () => {
      // First create a sleep record
      const sleep = await Sleep.create({
        aSleepTime: '22:00',
        wakeUpTime: '06:00',
        user: '507f1f77bcf86cd799439011',
        date: new Date().toDateString(),
        hours: 8
      });

      const response = await request(app)
        .delete('/api/sleep/remove')
        .send({ id: sleep._id });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('deletd', sleep._id.toString());
    });

    it('should return 400 for unauthorized deletion', async () => {
      const sleep = await Sleep.create({
        aSleepTime: '22:00',
        wakeUpTime: '06:00',
        user: '507f1f77bcf86cd799439012', // Different user ID
        date: new Date().toDateString(),
        hours: 8
      });

      const response = await request(app)
        .delete('/api/sleep/remove')
        .send({ id: sleep._id });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'Unauthorized');
    });

    it('should handle invalid sleep record ID', async () => {
      const response = await request(app)
        .delete('/api/sleep/remove')
        .send({ id: 'invalid-id' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/sleep/getall', () => {
    it('should get all sleep records for a user', async () => {
      // Create test sleep records
      await Sleep.create([
        {
          aSleepTime: '22:00',
          wakeUpTime: '06:00',
          user: '507f1f77bcf86cd799439011',
          date: new Date().toDateString(),
          hours: 8
        },
        {
          aSleepTime: '23:00',
          wakeUpTime: '07:00',
          user: '507f1f77bcf86cd799439011',
          date: new Date().toDateString(),
          hours: 8
        }
      ]);

      const response = await request(app)
        .get('/api/sleep/getall');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toHaveLength(2);
    });

    it('should return empty array when no records exist', async () => {
      const response = await request(app)
        .get('/api/sleep/getall');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toHaveLength(0);
    });
  });
}); 