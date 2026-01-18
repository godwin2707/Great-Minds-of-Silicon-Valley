Great Minds of Silicon Valley – Random Bio API

A lightweight Node.js + Express REST API that serves random brief biographies of influential Silicon Valley tech leaders on every request.

🌍 Live API:
👉 https://great-minds-of-silicon-valley.onrender.com/api/bio

🚀 Features

🎲 Returns a random Silicon Valley personality on each request

⚡ Fast, stateless REST API

🔁 Cache disabled to ensure true randomness

☁️ Deployed on Render (free tier)

🧩 Clean and simple backend design

📡 API Endpoint
GET /api/bio

Returns a random biography.

Example Response
{
  "name": "Steve Jobs",
  "company": "Apple",
  "bio": "Co-founder of Apple who revolutionized personal computing, smartphones, and consumer-focused product design."
}


🔄 Refresh the endpoint to get a different personality.

🛠️ Tech Stack

Backend: Node.js, Express

Language: JavaScript

Hosting: Render

API Style: REST

Data Source: Static JSON (local data module)

📁 Project Structure
.
├── api/
│   ├── server.js
│   └── package.json
├── data/
│   └── bio.js
└── README.md

🧑‍💻 Local Development
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/great-minds-of-silicon-valley.git
cd great-minds-of-silicon-valley

2️⃣ Install dependencies
cd api
npm install

3️⃣ Start the server
node server.js

4️⃣ Test locally

Open in browser:

http://localhost:3000/api/bio
