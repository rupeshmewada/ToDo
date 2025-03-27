# To-Do Application (MERN Stack)

This is a simple To-Do application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

## Features

- Create new tasks
- Read/display tasks
- Update tasks
- Delete tasks
- Responsive user interface with React
- API powered by Express and Node.js
- Data persistence using MongoDB

## Technologies Used

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB 
- **Others:** CORS, dotenv

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Clone the Repository
```bash
git clone git@github.com:rupeshmewada/ToDo.git
cd ToDo
```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## API Endpoints

### Task Routes

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| GET    | `/`    | Get all tasks      |
| POST   | `/`    | Create a new task  |
| PATCH    | `/:id`| Update a task      |
| DELETE | `/:id`| Delete a task      |

## Folder Structure

```
.
├── server
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── app.js  
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   ├── index.js
├── package.json
├── README.md
```

## Contributing
Feel free to fork this repository, improve the project, and submit pull requests.
