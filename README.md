# Sleep Tracker Application

A full-stack web application for tracking sleep patterns and managing sleep data. This application helps users monitor their sleep schedule, duration, and quality to improve their sleep habits.

## Features

- 👤 User authentication and authorization
- 📊 Track sleep duration and quality
- 📅 View sleep history and patterns
- 📱 Responsive design for mobile and desktop
- 🔒 Secure data storage
- 📈 Sleep analytics and insights

## Tech Stack

- **Frontend:**
  - React.js
  - Redux for state management
  - Material-UI/CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication

- **DevOps:**
  - Docker
  - Docker Compose

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sleep-tracker.git
   cd sleep-tracker
   ```


2. **Run with Docker**
   ```bash
   docker-compose up --build
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## Project Structure

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Sleep Data
- `GET /api/sleep` - Get all sleep records
- `POST /api/sleep` - Create new sleep record
- `PUT /api/sleep/:id` - Update sleep record
- `DELETE /api/sleep/:id` - Delete sleep record

## Development

### Running Locally Without Docker

1. **Start MongoDB**
   ```bash
   # Install MongoDB locally first
   mongod
   ```

2. **Start the Server**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Start the Client**
   ```bash
   cd client
   npm install
   npm start
   ```

## Docker Commands

- Build and start all services:
  ```bash
  docker-compose up --build
  ```

- Stop all services:
  ```bash
  docker-compose down
  ```

- View logs:
  ```bash
  docker-compose logs -f
  ```

- Access container shell:
  ```bash
  docker-compose exec server sh
  docker-compose exec client sh
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **MongoDB Connection Issues**
   - Ensure MongoDB container is running
   - Check if the connection string is correct
   - Verify network connectivity between containers

2. **Container Build Failures**
   - Clear Docker cache: `docker system prune -a`
   - Check for proper dependencies in package.json
   - Verify Dockerfile syntax

3. **Hot Reload Not Working**
   - Ensure volume mounts are correct in docker-compose.yaml
   - Check file permissions in mounted volumes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- MongoDB documentation
- Docker documentation
- React.js community
- Express.js community