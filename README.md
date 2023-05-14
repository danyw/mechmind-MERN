# MechMind Garage 

**MechMind Garage's internal ticket/note system is deployed at the following locations:**
- [Mechmind](https://mechmind.onrender.com)
- [Mechmind-API](https://mechmind-api.onrender.com)

*It may be loading slowly as it's a free service.*


*It may be loading slowly as it's a free service.*


The system is built using the MERN stack (MongoDB, Express, React, and Node.js), and React/Redux. It facilitates the creation of repair notes by various types of users (e.g., employees, admins, managers), each with distinct permissions. Admins and managers can see all of the notes, create users, delete users, etc.

## Branches
The `main` branch contains the production code. All development should be done in the `development` branch. 
## Features 🌟

- Responsive design implemented with React
- MERN stack (MongoDB, Express, React, and Node.js)
- User authorization and authentication
- Redux for easy state management and scalability
- Seamless note creation and delegation

## Installation & Setup 🛠️

1. Clone the repository
`https://github.com/danyw/mechmind-MERN.git`

2. Install dependencies for frontend and backend
``` bash
cd frontend
npm install

cd backend
npm install
```
1. Create a `.env` file in both the backend and frontend folders with the following variables:

```bash
NODE_ENV=development
DATABASE_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```
```bash
NODE_ENV=development
```


1. Start the development server
`npm run dev`

    *The API server will now be running on http://localhost:5000.*

2. Start the website
    ```bash
    cd ../frontend
    npm start
    ```

    *The website will now be running on http://localhost:3000.*

For further information, please refer to the *UserStories* file.

**Note**: Replace your_mongodb_uri, your_access_token, and your_refresh_token with your actual MongoDB URI and tokens.

## Screenshots

![screenshots](screenshots.jpg)