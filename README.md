# Shophoria

**Shophoria** is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). It serves product data across multiple categories through a RESTful API, with a React frontend deployed on Vercel.

## 🚀 Features

- **Product Categories**: Men's clothing, Women's clothing, Kids' clothing, Footwear, and Beauty products
- **Search**: Search products across categories
- **State Management**: Efficient state handling with Redux Toolkit
- **Routing**: Seamless navigation using React Router
- **RESTful API**: Express + MongoDB backend with category-based routes
- **Environment-Based Config**: API base URL and DB URI managed via `.env` files

## 🛠️ Tech Stack

### Frontend

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

### Backend

- **Runtime**: [Node.js](https://nodejs.org/) (v18+, ESM modules)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **CORS**: [cors](https://www.npmjs.com/package/cors)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Dev Tool**: [Nodemon](https://nodemon.io/)

## 📂 Project Structure

```text
shophoria/
├── backend/
│   ├── models/
│   │   ├── beautyModel.js
│   │   ├── footwearModel.js
│   │   ├── kidsModel.js
│   │   ├── menModel.js
│   │   └── womenModel.js
│   ├── routes/
│   │   ├── beauty.js
│   │   ├── footwear.js
│   │   ├── kids_clothing.js
│   │   ├── men_clothing.js
│   │   └── women_clothing.js
│   ├── app.js
│   ├── .env              ← not committed
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── ItemList.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Item_page.jsx
│   │   │   ├── SearchPage.jsx
│   │   │   └── Wishlist.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── beautySlice.js
│   │   │   ├── footwearSlice.js
│   │   │   ├── kidsSlice.js
│   │   │   ├── menSlice.js
│   │   │   └── womenSlice.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── .env              ← not committed
│   └── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas URI (or a local MongoDB instance)

---

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `backend/`:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   frontend_uri=http://localhost:5173
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run at `http://localhost:3000`.

---

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `frontend/`:

   ```env
   VITE_BASE_URL=http://localhost:3000
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will run at `http://localhost:5173`.

---

## 🌐 API Endpoints

All endpoints return a JSON array of product objects.

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | `/api/men_clothing`   | Fetch men's clothing   |
| GET    | `/api/women_clothing` | Fetch women's clothing |
| GET    | `/api/kids_clothing`  | Fetch kids' clothing   |
| GET    | `/api/footwear`       | Fetch footwear         |
| GET    | `/api/beauty`         | Fetch beauty products  |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

This project is free and open source.
