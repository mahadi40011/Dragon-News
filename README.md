# Dragon News 📰

Dragon News is a React-based news web application built with Tailwind CSS and DaisyUI.  
It features Firebase Authentication, React Router v7, and several popular libraries for a modern web experience.  

---

## 🚀 Live Demo
🔗 [Visit Live Site](https://dragon-news-47f6b.web.app)

---

## 🛠 Technologies & Libraries Used

- **React**: v19.1.1  
- **React Router**: v7.9.4  
- **Tailwind CSS**: v4.1.14  
- **DaisyUI**: v5.3.7  
- **Firebase**: v12.4.0 (Authentication)  
- **Date-fns**: v4.1.0 (Date formatting)  
- **React Icons**: v5.5.0 (Icons)  
- **React Fast Marquee**: v1.6.5 (Scrolling marquee)  
- **@tailwindcss/vite**: v4.1.14  

---

## 🚀 Features

- **Home Page**: Displays the latest news highlights.  
- **Category Page**: Browse news by category (`/category/:id`).  
- **News Details Page**: Read full news details (Protected route, login required) (`/news-details/:id`).  
- **Authentication**:  
  - Login (`/auth/login`)  
  - Register (`/auth/register`)  
- **Responsive UI**: Mobile-friendly design using Tailwind CSS and DaisyUI.  
- **Loading State**: Shows loading indicator while fetching news.  
- **Error Handling**: 404 error page for invalid routes.  

---

## 📁 Project Structure (Overview)

- **src/**: All source code
  - **components/** → Reusable UI components
  - **layouts/** → Layouts (HomeLayout, AuthLayout)
  - **pages/** → Pages (Home, CategoryNews, NewsDetails, Login, Register)
  - **routes/** → React Router configuration
  - **assets/** → Images, JSON data, and other static assets

- **public/**: Public assets
  - `news.json` → Sample news data

- **tailwind.config.js** → Tailwind CSS configuration  
- **vite.config.js** → Vite configuration  
- **package.json** → Project dependencies and scripts

---

## 💻 Installation & Setup

```bash
git clone https://github.com/mahadi40011/Dragon-News.git
cd Dragon-News
npm install
npm run dev
