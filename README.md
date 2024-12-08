# Medical Assistant

A real-time medical consultation transcription and summary application built with React.

## Features

- Real-time transcription of doctor-patient consultations
- Automatic summary generation
- Modern, animated UI
- Mock functionality for demonstration purposes

## Technologies Used

- React
- Tailwind CSS
- Lucide React Icons
- Docker
- Nginx

## Getting Started

### Local Development

1. Clone the repository
```bash
git clone https://github.com/Mlongen/medical_assistant.git
cd medical_assistant
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

### Docker Deployment

1. Using Docker Compose (recommended):
```bash
docker-compose up -d
```

2. Or build and run the Docker image manually:
```bash
# Build the image
docker build -t medical-assistant .

# Run the container
docker run -p 3000:80 medical-assistant
```

The application will be available at http://localhost:3000

## Docker Configuration

The application uses a multi-stage build process:
- Stage 1: Builds the React application
- Stage 2: Serves the built files using Nginx

The configuration includes:
- Production-grade Nginx settings
- Automatic handling of React routing
- Gzip compression
- Cache optimization for static assets
- Container health checks

## Development

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `docker-compose up` - Start dockerized version

## License

MIT