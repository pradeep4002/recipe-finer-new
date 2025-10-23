# Simple Recipe Finder

A simple recipe finder web app built with **Vite, React, and Tailwind CSS**, using **TheMealDB API** to fetch recipes based on user-input ingredients. Users can search for recipes, explore random suggestions, and view detailed recipe information, including ingredients and instructions.

## 🚀 Live Demo
[https://recipe-finder-pkpotter03.vercel.app/](#)

---

## 📌 Features
✅ Search recipes by ingredient  
✅ View 6 random recipes on the homepage  
✅ Click on a recipe to see full details (image, ingredients, instructions, etc.)  
✅ Responsive & fast UI with Tailwind CSS  

---

## 🛠️ Tech Stack
- **Frontend:** Vite, React, Tailwind CSS
- **API:** TheMealDB API
- **Deployment:** Vercel

---

## 🚀 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/pkpotter03/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

4. **Deploy to Vercel (optional):**
   ```bash
   vercel
   ```

---

## 📜 API Usage
This project uses **TheMealDB API** to fetch recipes. No API key is required. Example API endpoints used:
- Get recipes by ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
- Get full recipe details: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID`

---

If you like this project, give it a ⭐ on GitHub! It really helps! 😊

---

## 📜 License
This project is open-source and available under the **MIT License**.
