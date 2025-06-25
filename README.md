# 🌍 MapsterMind

A fun and interactive geography quiz game where users test their knowledge of world capitals. Built with React (frontend), Node.js + Express (backend), and PostgreSQL (database).

---

## 🚀 Features

- Random capital city quiz questions from around the world
- Real-time answer validation with feedback
- Score tracking across questions
- Responsive and dark-themed UI
- Clean separation of frontend and backend
- PostgreSQL as the database for storing countries and capitals

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **ORM**: pg module
- **Hosting**: Localhost (dev)


---

## 🧪 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/NikhilNaik23/MapsterMind.git
cd mapstermind
```

### 2. Set Up the Database
- Make sure PostgreSQL is installed and running.
```bash
CREATE DATABASE mapstermind;

-- Sample table and data
CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country VARCHAR(100),
  capital VARCHAR(100)
);

INSERT INTO capitals (country, capital)
VALUES 
  ('India', 'New Delhi'),
  ('France', 'Paris'),
  ('Japan', 'Tokyo'),
  ('Brazil', 'Brasília'),
  ('Canada', 'Ottawa');

```

### 3. Backend Setup
```bash
npm install
```

- Create a .env file:
```bash
PORT=5000
USER=postgres
HOST=localhost
DATABASE=mapstermind
PASSWORD=your_postgres_password
DB_PORT=5432
```
- Run the server:
```bash
npm run dev
```

### 4. Run the Frontend
```bash
cd ../frontend
npm install
npm run dev
```
## 🔁 API Reference
- GET /api/quiz/random
- Returns a random country and its capital from the database.
-Example Response:
```bash
{
  "id": 3,
  "country": "Japan",
  "capital": "Tokyo"
}
```

![GitHub last commit](https://img.shields.io/github/last-commit/NikhilNaik23/MapsterMind)
