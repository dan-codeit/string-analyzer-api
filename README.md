# String Analysis REST API

A RESTful API service that analyzes strings and stores their computed properties including length, palindrome check, character frequency, word count, and more.

---

## Features

For each analyzed string, the API computes and stores the following properties:

- **length**: Number of characters in the string
- **is_palindrome**: Boolean indicating if the string reads the same forwards and backwards (case-insensitive)
- **unique_characters**: Count of distinct characters
- **word_count**: Number of whitespace-separated words
- **sha256_hash**: SHA-256 hash of the string (used as a unique identifier)
- **character_frequency_map**: Dictionary mapping each character to its frequency

---

## Setup Instructions

- Clone the Repository

```bash
git clone https://github.com/dan-codeit/string-analysis-api.git
cd string-analysis-api
```

- Install Dependencies

```bash
npm install
```

## Dependencies

- express: Web framework
- crypto: Node built-in module for SHA-256
- body-parser: For parsing JSON requests
- uuid or nanoid (optional): For generating fallback IDs


