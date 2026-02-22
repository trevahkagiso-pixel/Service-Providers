# ServiceHub - Service Provider Marketplace

A modern web application connecting customers with trusted service professionals for plumbing, electrical, cleaning, and more.

**Live Demo:** [https://main.d1ax2a68qu2mu9.amplifyapp.com/](https://main.d1ax2a68qu2mu9.amplifyapp.com/)

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Routing:** React Router v7
- **Styling:** CSS Custom Properties + Responsive Design
- **Deployment:** AWS Amplify

## Features

- 🔍 Browse 8+ service categories
- 📅 Request service bookings
- 👷 Provider signup portal
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

## Getting Started

```bash
cd service-booking-fe
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## AWS Amplify Deployment

The project is configured for AWS Amplify deployment with `amplify.yml`:

```yaml
version: 1
applications:
  - appRoot: service-booking-fe
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: dist
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
```

**Deploy Steps:**
1. Connect your repository to AWS Amplify Console
2. Amplify will auto-detect the `amplify.yml` configuration
3. Build and deployment will run automatically on push

## Project Structure

```
service-booking-fe/
├── src/
│   ├── pages/          # Route components
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── *.css           # Styles
├── amplify.yml         # AWS Amplify config
└── package.json
```

## Known Issues

- ⚠️ Security vulnerability in `minimatch` dependency - update required
- ⚠️ No backend integration - forms log to console only
- ⚠️ Missing error boundaries and proper error handling
- ⚠️ No authentication or data persistence

## Roadmap

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real booking system
- [ ] Payment processing
- [ ] Testing suite
- [ ] Performance optimizations

## License

MIT