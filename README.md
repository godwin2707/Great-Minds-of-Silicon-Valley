# Great Minds of Silicon Valley – Random Bio API

A lightweight **Node.js + Express REST API** that serves **random brief biographies of influential Silicon Valley tech leaders** on every request.

🌍 **Live API:**  
👉 https://great-minds-of-silicon-valley.onrender.com/api/bio

---

## 🚀 Features

- 🎲 Returns a **random Silicon Valley personality** on each request  
- ⚡ Fast, stateless REST API  
- 🔁 Cache disabled to ensure true randomness  
- ☁️ Deployed on **Render** (free tier)  
- 🧩 Clean and simple backend design  

---

## 📡 API Endpoint

### `GET /api/bio`

Returns a random biography.

### Example Response
```json
{
  "name": "Steve Jobs",
  "company": "Apple",
  "bio": "Co-founder of Apple who revolutionized personal computing, smartphones, and consumer-focused product design."
}
