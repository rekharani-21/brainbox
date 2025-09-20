# 🧠 BrainBox

A full-stack note-taking application built with **React (Vite)**, **Node.js/Express**, **MongoDB**, and **Redis (Upstash)**.  
Create, view, and manage your notes in a clean, responsive interface.

---

## 🚀 Features

- 📝 Create, read, update, and delete notes
- ⚡ Fast React frontend built with Vite
- 🌐 REST API built with Express + MongoDB
- 🔒 Environment variable support for secrets
- 🗄️ Redis (Upstash) for caching / rate-limiting
- 📱 Responsive UI styled with Tailwind CSS + Lucide Icons

---

## 🛠️ Tech Stack

**Frontend:**  
- React (Vite)
- Axios
- React Router
- React Hot Toast
- Tailwind CSS + DaisyUI
- Lucide React Icons

**Backend:**  
- Node.js / Express
- MongoDB (Mongoose)
- Redis (Upstash)
- CORS middleware

**Deployment:**  
- Render (or any Node.js hosting platform)
- MongoDB Atlas
- Upstash Redis

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rekharani-21/brainbox.git
cd brainbox
2. Install dependencies
Frontend + backend are separated. Install each:


# frontend (Vite)
npm install

# backend
cd backend
npm install
3. Environment variables
Create a .env file inside backend/:
MONGO_URL=mongodb+srv://<user>:<password>@cluster0.mongodb.net/notes_db
PORT=5001

UPSTASH_REDIS_REST_URL="https://your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"

NODE_ENV=development
For the frontend, if needed, create a .env file at the root:

env
VITE_API_URL=http://localhost:5001/api
4. Run locally
Frontend:
npm run dev
Backend:
cd backend
npm run start
Your app will be available at:

Frontend: http://localhost:5173

Backend: http://localhost:5001/api

🌐 Deployment (Render)
Add a Web Service in Render pointing to this repo.

Build Command:
npm install --prefix backend

Start Command:
npm run start --prefix backend
Add the environment variables in Render’s dashboard.

📝 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get a single note
POST	/api/notes	Create a new note
PUT	/api/notes/:id	Update a note
DELETE	/api/notes/:id	Delete a note


🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📄 License
This project is licensed under the MIT License.
