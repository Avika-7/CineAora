# CineAora 🎬!

CineAora is a modern movie discovery platform built using React and TMDB API.  
Explore trending movies, search your favorites, view detailed movie information, and create a personalized watchlist with a cinematic user experience!

---

##  Features

-  Trending movies showcase
-  Dynamic movie details pages
-  Optimized movie search with debouncing
-  Ratings and movie information
-  Personal watchlist management
-  Local storage persistence
-  Animated hero carousel
-  Fully responsive design
-  Smooth UI animations

---

## Tech Stack

**Frontend**

- React.js
- Tailwind CSS
- React Router
- Context API
- Framer Motion

**API & Tools**

- TMDB API
- Axios
- Local Storage
- Vite

---

## Screenshots
<img width="669" height="529" alt="image" src="https://github.com/user-attachments/assets/b9b51b15-55f0-4775-951e-9724c5cdf36e" />



---

##  Getting Started

Follow these steps to run the project locally.

---

### 1. Clone the repository

```bash
git clone https://github.com/Avika-7/CineAora.git
```

---

### 2. Navigate to the project folder

```bash
cd CineAora
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Setup environment variables

Create a `.env` file in the root directory.

Add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

You can get your API key from:

https://www.themoviedb.org/

---

### 5. Start development server

```bash
npm run dev
```

---

The application will run at:

```
http://localhost:5173
```

---

##  Project Structure

```
src

├── api
│   └── tmdb.js
│
├── components
│   ├── hero
│   ├── movie
│   ├── search
│   └── common
│
├── context
│   └── WatchlistContext.jsx
│
├── hooks
│
├── pages
│
├── routes
│
└── App.jsx
```

---

## Key Learnings

This project focuses on:

- Component-based architecture
- REST API integration
- React hooks
- Custom hooks
- State management using Context API
- Routing using React Router
- Performance optimization with debouncing
- Responsive UI development

---

## Future Improvements

- User authentication
- Backend watchlist storage
- Personalized recommendations
- Trailer integration
- Infinite scrolling

---

## Author

Developed by **Avika Kumar**
