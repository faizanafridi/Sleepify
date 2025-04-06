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

## Automated Testing

### Prerequisites for Testing
- Python 3.8-3.11 (recommended for better compatibility)
- pip (Python package installer)
- Chrome browser installed

### Setting Up Test Environment

1. **Create and activate a virtual environment**
   ```bash
   # Windows
   python -m venv .venv
   .venv\Scripts\activate

   # Linux/Mac
   python -m venv .venv
   source .venv/bin/activate
   ```

2. **Install test dependencies**
   ```bash
   cd automatedtests
   pip install -r requirements.txt
   ```

### Test Structure
automatedtests/
├── resources/ # Reusable keywords and common settings
│ ├── common.robot # Common settings and keywords
│ └── login_keywords.robot
├── test_data/ # Test data files
│ └── login_data.robot
├── tests/ # Test suites
│ └── login_tests.robot
└── requirements.txt # Python dependencies


### Running Tests

1. **Run all tests**
   ```bash
   robot tests/
   ```

2. **Run specific test suite**
   ```bash
   robot automatedtests/tests/login_tests.robot
   ```

3. **Run tests with specific tag**
   ```bash
   robot -i smoke automatedtests/tests/
   ```

4. **Generate reports in custom directory**
   ```bash
   robot --outputdir results automatedtests/tests/
   ```

### Test Reports
After running the tests, Robot Framework generates three files:
- `report.html` - Test results in HTML format
- `log.html` - Detailed test execution log
- `output.xml` - Test results in XML format

### Available Test Suites

#### Login Tests (`login_tests.robot`)
- Valid Login Test
- Invalid Login Test
- Valid Registration Test
- Invalid Registration Test
- Switch Between Login And Register Forms

### Troubleshooting Test Environment

1. **WebDriver Issues**
   ```bash
   # Update webdriver manually
   webdriver-manager update
   ```

2. **Python Version Compatibility**
   - If using Python 3.12, downgrade to Python 3.11 for better compatibility
   - Or use the following alternative installation:
     ```bash
     pip install selenium-webdriver-manager
     ```

3. **Browser Driver Issues**
   - Ensure Chrome browser is installed
   - Try clearing the webdriver cache:
     ```bash
     webdriver-manager clean
     webdriver-manager update
     ```

### Adding New Tests

1. Create a new test file in `automatedtests/tests/`
2. Add keywords in `automatedtests/resources/`
3. Add test data in `automatedtests/test_data/`
4. Follow the existing test structure and naming conventions

### Best Practices

1. **Test Organization**
   - Use descriptive test names
   - Group related tests in the same suite
   - Use tags for test categorization

2. **Test Data Management**
   - Keep test data separate from test cases
   - Use variables for repeated values
   - Avoid hardcoding test data in test cases

3. **Keyword Usage**
   - Create reusable keywords for common actions
   - Follow the page object pattern
   - Keep keywords focused and single-purpose

4. **Reporting**
   - Use meaningful test documentation
   - Add detailed failure messages
   - Regularly review test reports



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