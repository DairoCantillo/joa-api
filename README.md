# 🌐 URL Shortener API(Joa API)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Description

This API allows you to shorten URLs, manage users, and track visits. It is built with Node.js, Express, and Prisma, and uses TypeScript for a better development experience.

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Prisma**: ORM for Node.js and TypeScript.
- **TypeScript**: Programming language that extends JavaScript.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DairoCantillo/joa-api.git
   cd joa-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of the project and add the following variables:

   ```env
   DATABASE_URL="your_database_url"
   PORT=3000
   ```

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

## Usage

To start the server in development mode:

```bash
npm run dev
```
