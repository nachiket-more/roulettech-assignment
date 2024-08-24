# Roulettech Assignment

## Description
A web app focused on quick and easy recipes.
- ***main***: main project files
- ***django-backend:*** deployment branch for django
- ***React-frontend:*** deployment branch for react

## Features
- List of recipes
- Detailed view of each recipe

## Technologies Used
- **Frontend:** React
- **Backend:** Django
- **Deployment & Infrastructure:** AWS S3, DynamoDB, CodePipeline, Elastic Beanstalk

## URLs
- **Frontend:** http://recipe-react.s3-website.us-east-1.amazonaws.com/
- **Backend API:** http://django-env.eba-ehdx2drn.us-east-1.elasticbeanstalk.com/

## Architecture Overview

### Frontend Tier
- **AWS S3:** Hosts the React app's build files.
- **AWS CodePipeline:** Connects to the React GitHub repository for CI/CD.
- **Functionality:** The frontend calls the backend API to fetch recipe data.

### Backend Tier
- **AWS Elastic Beanstalk:** Deploys the Django backend app.
- **AWS CodePipeline:** Connects to GitHub for automated deployments to Elastic Beanstalk.
- **Functionality:** The backend fetches recipe data from DynamoDB when an API is called.

### Database Tier
- **DynamoDB:** Stores recipe data.


## Installation Instructions
### Prerequisites: 
Software and tools required are Nodejs, npm, Python

### Frontend (React App)

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/nachiket-more/roulettech-assignment
    ```

2. **Navigate to the Frontend Directory:**
    ```bash
    cd roulettech-assignment/react_frontend
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Start the Development Server:**
    ```bash
    npm start
    ```

### Backend (Django App)

1. ***Navigate to the Backend Directory:***
    ```bash
    cd roulettech-assignment/django_backend
    ```

2. ***Install Dependencies: Install the required Python packages using pip:***
    ```bash
    pip install -r requirements.txt
    ```

3. ***Start the Django development server:***
    ```bash
    python manage.py runserver
    ```
    This will require 'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' as env variables or in settings.py to have access to the Dynamodb 

## Endpoints
Below is a list of the available API endpoints for the backend (Django app). These endpoints allow the frontend (React app) to interact with the backend.

1. **/recipes/ (GET)**

    Fetches a list of all recipes stored in DynamoDB.
    ```bash
    GET http://localhost:8000/api/recipes/
    ```

2. **/recipe/{id}/ (GET)**

    Fetches the details of a specific recipe by ID.
    ```bash
    GET http://localhost:8000/api/recipe/1/
    ```


## References
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-django.html#python-django-deploy
- https://faun.pub/how-to-create-cicd-using-github-as-source-and-elastic-beanstalk-244319a2a350
- https://plainenglish.io/community/how-to-host-your-react-application-in-aws-s3-e9969d
