# Profile + Cat Fact API

A simple RESTful API built with **Express.js** and **TypeScript** that returns profile information along with a random cat fact, fetched live from the [Cat Facts API](https://catfact.ninja/fact).

---

## Features

- `GET /me` endpoint
- Returns static profile info (from `.env`)
- Includes a dynamic cat fact (changes every request)
- Includes current UTC timestamp in ISO 8601 format
- Graceful error handling if the Cat Facts API fails
- Clean, modular TypeScript project structure

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **HTTP Client**: Axios


---

##  Installation

```bash
git clone https://github.com/dan-codeit/cat-profile-api.git
cd cat-profile-api

# Install dependencies
npm install
```