# Shophoria

**Shophoria** is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a modern frontend and a robust backend.

## 🚀 Features

- **Product Categories**: Browse and shop products across multiple categories.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **State Management**: Efficient state handling with Redux Toolkit.
- **Routing**: Seamless navigation using React Router.
- **RESTful API**: Custom-built backend with Express and MongoDB.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **Dev Tool**: [Nodemon](https://nodemon.io/)

## 📂 Project Structure

```text
shopify/
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
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── images/
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
│   │   │   ├── beautySlice.js
│   │   │   ├── footwearSlice.js
│   │   │   ├── kidsSlice.js
│   │   │   ├── menSlice.js
│   │   │   ├── womenSlice.js
│   │   │   └── store.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Atlas)

### Setup Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (if applicable) and add your connection strings.
4. Start the development server:
   ```bash
   npm run dev
   ```

### Setup Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

This project is free and open source.
