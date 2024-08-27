# Real Estate Property Listing and Recommendation System

This is a full-stack web application built with React, Node.js, Express, and MongoDB. It allows users to view and explore real estate property listings and get personalized recommendations.

## Features

- **Property Listing**: View available properties with details such as location, size, and price.
- **Property Details**: Detailed view of individual properties.
- **User Authentication**: Login and sign-up functionality.
- **Recommendation System**: Suggests similar properties based on price and location.
- **Responsive Design**: Works on desktop and mobile devices.

## Technologies Used

- **Frontend**: Reactjs + Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance or MongoDB Atlas account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Amanbig/residential_properties.git
    cd residential_properties
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongo_db_uri
    PORT=5000
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the backend server:

    ```bash
    npm run start
    ```

2. Open your browser and navigate to `http://localhost:5000` to view the application.

### Deployment to Vercel

1. Install the Vercel CLI (if you haven't already):

    ```bash
    npm install -g vercel
    ```

2. Initialize your project with Vercel:

    ```bash
    vercel
    ```

3. Deploy the application:

    ```bash
    vercel --prod
    ```

### Vercel Configuration

Ensure your project has a `vercel.json` file with the following configuration:

```json
{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/api/(.*)",
            "dest": "/index.js"
        },
        {
            "src": "/(.*)",
            "dest": "/index.js"
        }
    ]
}
```

