# Engraving-web 🪵✨

This is a demo website for a personalized engraving business, built using React and Firebase.  
The project showcases engraved gifts like keychains, glasses, and wooden signs – all made by hand.

> 🔔 Note: This is a demo version. Prices and product data are for display purposes only.

---

## 🔗 Live Demo

🌍 [View the live site on Firebase Hosting](https://your-firebase-link.web.app)

---

## 🛠️ Technologies Used

- **React** (Vite)
- **Tailwind CSS**
- **Firebase Hosting**
- **Firebase Storage**
- **Firebase Admin Panel (custom login)**

---

## 📌 Features

- 🔐 **Admin panel** with password-protected access
  - Upload images to Firebase Storage
  - Delete uploaded images
  - Real-time gallery update
- 🖼️ **Gallery page** displaying uploaded works
- 🧑‍🎨 **About page** with personal story & service list
- 📩 **Contact page** with form + Messenger/Viber buttons
- 🧩 **Categories page** with:
  - Product types (keychains, glasses, wood items)
  - Price ranges (e.g. under 5000 HUF – *for demo only*)
- 💻 Mobile-responsive layout

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with intro and call to action |
| `/galeria` | Gallery of completed engraving works |
| `/rolam` | About the engraver and services offered |
| `/kapcsolat` | Contact form + Messenger/Viber links |
| `/kategoriak` | Product & price-based categories |
| `/admin` | Admin page for image upload/delete (password: `Admin123`) |

---

## 🧪 How to Run Locally (optional)

```bash
git clone https://github.com/your-username/engraving-web.git
cd engraving-web
npm install
npm run dev
Requires Node.js and Vite.

⚠️ Disclaimer
This project is a demo only.

Prices shown are not real and are used for visual layout purposes.

Product categories and content may be changed later.

🙌 Credits
Design by Erdős Viktor

Built with Firebase & React
