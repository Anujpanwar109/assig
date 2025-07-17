# 🛍️ E-Commerce App (Next.js + Tailwind CSS)

A fully responsive e-commerce application built with **Next.js** and styled using **Tailwind CSS**. It features product listing, filtering, cart management, and dynamic routing with clean UI and local state management.

---

## 🌐 Pages Overview

### 1. **Home Page** (`/`)
#### 🧱 Layout
- **Header**
  - Logo (left)
  - Search bar (center)
  - Cart icon with badge + profile/avatar (right)
  
- **Main Section**
  - **Sidebar (left)**
    - Category filter (checkboxes or pills)
    - Price range slider
    

  - **Product Grid (right)**
    - Responsive layout:
      - 3 columns (desktop)
      - 2 columns (tablet)
      - 1 column (mobile)
    - Each product card includes:
      - Product image
      - Title
      - Price
      - Quick "Add to Cart" button
      

- **Footer**
  - Copyright
  - Social media icons

---

### 2. **Product Detail Page** (`/product/[id]`)
#### 🧾 Layout
- **Image Section (left)**
  - Large product image or image carousel

- **Details Section (right)**
  - Product title
  - Price
  - Description
  - Category
  - Quantity selector
  - "Add to Cart" button
  

---

### 3. **Cart** 
#### 🛒 Features
- List of added products
- Quantity update controls
- Remove item option
- Price summary

---

## 🧠 Logic to Implement

- ✅ Filtering logic (category + price)
- ✅ Search filtering (string match)
- ✅ URL-based filters (`?category=electronics&price=0-1000`)
- ✅ Client-side cart state management using:
  - React Context / Zustand / Redux
- ✅ Dynamic routing with Next.js (`/product/[id]`)
- ✅ Conditional rendering (e.g., no products found)
- ✅ Cart state persisted in `localStorage`

---

## 🎨 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [lucide-react](https://lucide.dev/icons/)

---

## 📁 Project Setup

```bash
# URL
assig-3lt7kze9x-anuj-panwars-projects-671270c0.vercel.app

# Clone the repo
git clone https://github.com/Anujpanwar109/assig.git
cd assig

# Install dependencies
npm install

# Start the dev server
npm run dev



