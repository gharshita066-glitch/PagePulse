# 🚀 Page Pulse

A full-stack website auditing tool that analyzes any webpage and provides useful SEO and performance insights.

## Features

- HTTP Status Code
- Response Time
- Page Title
- Meta Description
- H1 Count
- Images Missing Alt Text
- Word Count
- Error Handling
- Responsive UI
- REST API
- Automated Tests using Jest

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Testing
- Jest
- Supertest

## Installation

### Backend

cd backend
npm install
npm start
### Frontend

Open `index.html` using Live Server.

## API

### POST /audit

Example Request

{
  "url":"https://example.com"
}
Example Response

{
  "status":200,
  "responseTime":"250 ms",
  "title":"Example Domain",
  "metaDescription":"Example website",
  "h1Count":1,
  "imagesWithoutAlt":0,
  "wordCount":120
}
## Tests

Run:

npm test
## Future Improvements

- SEO Score
- Dark Mode
- Lighthouse Integration
- PDF Report Export

Built for the Digital Heroes Training Task.