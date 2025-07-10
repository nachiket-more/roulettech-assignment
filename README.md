# Web App for Quick and Easy Recipes

## Description
A full-stack recipe web app focused on quick and easy meals. Originally built and deployed on AWS (S3, Elastic Beanstalk, DynamoDB, CodePipeline), later migrated to a free stack to keep it live after AWS free tier expiry.

- **main** - main project files
- **django-backend** - deployment branch for Django
- **react-frontend** - deployment branch for React

## Live Demo
- **Frontend:** 
- **Backend API:** 

## Features
- Browse 50+ quick and easy recipes across 15+ cuisines
- Real-time search by recipe name
- Filter recipes by cuisine
- Detailed recipe view with ingredients, step-by-step instructions, prep time and serving info
- Responsive design across all devices

## Technologies Used
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (development) → PostgreSQL via Supabase (production)
- **Original Deployment:** AWS S3, DynamoDB, Elastic Beanstalk, CodePipeline
- **Current Deployment:** Vercel (frontend), Render (backend)

## Architecture Overview

### Original AWS Architecture
- **AWS S3** - hosted the React build files
- **AWS Elastic Beanstalk** - deployed the Django backend
- **AWS CodePipeline** - CI/CD pipeline connected to GitHub for both frontend and backend
- **DynamoDB** - stored recipe data

### Current Architecture
- **Vercel** - hosts the React frontend
- **Render** - hosts the Django backend
- **Supabase (PostgreSQL)** - stores recipe data in production
- **SQLite** - used for local development

## Installation Instructions

### Prerequisites
Node.js, npm, Python 3.x, pip

### Frontend (React)

1. Clone the repository:
```bash
    git clone https://github.com/nachiket-more99/recipe-web-app
```

2. Navigate to the frontend directory:
```bash
    cd recipe-web-app/react_frontend
```

3. Install dependencies:
```bash
    npm install
```

4. Start the development server:
```bash
    npm start
```

### Backend (Django)

1. Navigate to the backend directory:
```bash
    cd recipe-web-app/django_backend
```

2. Install dependencies:
```bash
    pip install -r requirements.txt
```

3. Run migrations:
```bash
    python manage.py migrate
```

4. Load seed data:
```bash
    python manage.py loaddata recipes/fixtures/recipes_seed.json
```

5. Start the development server:
```bash
    python manage.py runserver
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/recipes/` | Returns list of all recipes |
| GET | `/api/recipe/{id}/` | Returns details of a specific recipe |

**Example:**
```bash
GET http://localhost:8000/api/recipes/
GET http://localhost:8000/api/recipe/1/
```

## References
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-django.html
- https://faun.pub/how-to-create-cicd-using-github-as-source-and-elastic-beanstalk-244319a2a350
- https://plainenglish.io/community/how-to-host-your-react-application-in-aws-s3-e9969d