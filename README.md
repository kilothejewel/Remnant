# ✝️ Remnant — Faith-Inspired Clothing & Accessories

Remnant is a modern e-commerce web application dedicated to spreading faith through fashion.  
Built with **Next.js**, **Supabase**, and **Stripe**, it enables users to browse, purchase, and support Christian-based apparel and accessories.

---

## 🚀 Tech Stack

**Frontend & Backend Framework:** [Next.js](https://nextjs.org/)  
**Database & Auth:** [Supabase (PostgreSQL)](https://supabase.io)  
**Payments:** [Stripe Checkout](https://stripe.com/docs/payments/checkout)  
**Styling:** [Tailwind CSS](https://tailwindcss.com/)  
**Hosting:** [Vercel](https://vercel.com/)  
**Image Storage:** [Supabase Storage](https://supabase.com/docs/guides/storage) or [Cloudinary](https://cloudinary.com)

---

## 🧭 Project Overview

### 🎯 Core Purpose
To create an e-commerce platform for **faith-based clothing and accessories**, combining style with belief and building an online community around the message of **Romans 11:5 — “A remnant chosen by grace.”**

### 🛍 MVP Features
- Product catalog (listing + details)
- Shopping cart system
- Stripe checkout for payments
- Supabase authentication (sign-up/login)
- Order tracking for users
- Admin dashboard (add/edit products)
- Responsive, mobile-friendly UI

### 🔮 Future Roadmap
- Blog & Devotionals section (community outreach)
- Event registration (church & youth meetups)
- Loyalty system or donations
- Email notifications (SendGrid/Postmark)
- AI-powered recommendations (later phase)

---

## 🗂 Folder Structure

```
remnant-webapp/
├── components/       # UI components (Navbar, ProductCard, etc.)
├── pages/            # Next.js pages
│   ├── api/          # Serverless backend routes (products, checkout, webhooks)
│   └── product/      # Dynamic routes for product details ([slug])
├── public/           # Static assets (images, icons)
├── styles/           # Tailwind global styles
├── utils/            # Helpers and API client setup
├── .env.local.example # Environment variable template
└── README.md         # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js**: v18+ (recommended v20 LTS)
- **Package Manager**: npm or yarn
- **Accounts**: Supabase and Stripe

---

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Remnant.git
cd Remnant/remnant-webapp
```

---

### 2. Install Dependencies
```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<your_service_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
```

---

### 4. Run Development Server
```bash
npm run dev
```

Visit the app at: [http://localhost:3000/](http://localhost:3000/)

---

### 💳 Stripe Setup (Development Mode)
1. Create a Stripe account at [stripe.com](https://stripe.com).
2. Set up your API keys and webhook secrets in the `.env.local` file.

---

### 🛠 Useful Commands

| Command           | Description                       |
|-------------------|-----------------------------------|
| `npm run dev`     | Starts the development server     |
| `npm run build`   | Builds the app for production     |
| `npm start`       | Runs the production build locally |
| `npm run lint`    | Runs ESLint checks                |

---

## 🧱 Deployment

The app is deployed on **Vercel**. Every push to the `main` branch triggers an automatic build and deployment.

### Deployment Steps:
1. Push your code to GitHub.
2. Link your repository to Vercel.
3. Vercel will handle the rest (automatic builds and deployments).

---

## 🔒 Security & Best Practices

- **Do not store credit card details**: Use Stripe Checkout for secure payments.
- **Keep API keys secret**: Never commit `.env.local` to version control.
- **Use HTTPS**: Vercel provides SSL by default.
- **Sanitize and validate inputs**: Ensure all API inputs are properly sanitized.

---

## 🤝 Contributing

Contributions are welcome! To collaborate:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 🙏 Credits & Inspiration

Built with ❤️ for the Christian community.  
“We are the Remnant — Chosen By Grace.” *(Romans 11:5)*

---

## 📜 License

MIT License © 2025 Remnant Clothing Co.


---


