# 🤖 Subham Dangar — AI/ML Engineer Portfolio

A modern, AI-powered portfolio website built with Next.js, featuring an intelligent chatbot assistant. Designed for AI/ML engineers to showcase their work professionally.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)

---

## ✨ Features

- **Dark AI-Themed Design** — Premium dark UI with glassmorphism and subtle animations
- **AI Chatbot Assistant** — Powered by OpenRouter API, answers questions about your portfolio
- **Fully Responsive** — Works on phones, tablets, laptops, and ultrawide screens
- **Data-Driven** — All content lives in simple TypeScript files — easy to edit
- **SEO Optimized** — Proper meta tags, Open Graph, and Twitter cards
- **RAG-Ready Architecture** — Prepared for future vector search expansion
- **Vercel-Ready** — Deploy in minutes

---

## 📋 Prerequisites

Before starting, make sure you have these installed on your computer:

### 1. Node.js (v18 or higher)

Node.js lets your computer run JavaScript. Download it from:
👉 [https://nodejs.org](https://nodejs.org) — Choose the **LTS (Long Term Support)** version.

To check if it's already installed, open your terminal and type:
```bash
node --version
```
You should see something like `v18.17.0` or higher.

### 2. npm (comes with Node.js)

npm is a package manager that installs code libraries. It comes automatically with Node.js.
```bash
npm --version
```

### 3. Git (optional, but recommended)

Git helps you track changes to your code. Download from:
👉 [https://git-scm.com](https://git-scm.com)

---

## 🚀 Installation (Step by Step)

### Step 1: Open Terminal

- **Mac**: Press `Cmd + Space`, type "Terminal", press Enter
- **Windows**: Press `Win + R`, type "cmd", press Enter
- **VS Code**: Press `` Ctrl + ` `` to open the built-in terminal

### Step 2: Navigate to your project folder

```bash
cd /path/to/your/Portfolio
```

### Step 3: Install all dependencies

This downloads all the code libraries the project needs:
```bash
npm install
```
⏳ This may take 1-2 minutes. Wait until it finishes.

### Step 4: Set up environment variables

Copy the example environment file:
```bash
cp .env.example .env.local
```

Then open `.env.local` in any text editor and add your OpenRouter API key:
```
OPENROUTER_API_KEY=your_actual_api_key_here
```

**How to get an OpenRouter API key (free):**
1. Go to [https://openrouter.ai](https://openrouter.ai)
2. Sign up for a free account
3. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
4. Click "Create Key"
5. Copy the key and paste it in `.env.local`

> **Note**: The chatbot works even WITHOUT an API key — it uses built-in fallback responses. The API key enables full AI-powered answers.

---

## 💻 Running Locally

### Start the development server:
```bash
npm run dev
```

### What happens:
- The terminal will show something like:
  ```
  ▲ Next.js 16.x
  - Local: http://localhost:3000
  ```
- **localhost** means "your own computer" — the site is running on YOUR machine
- **:3000** is the port number (like a door number)

### View your site:
Open your web browser (Chrome, Firefox, Safari, etc.) and go to:
```
http://localhost:3000
```
🎉 You should see your portfolio!

### Stop the server:
Press `Ctrl + C` in the terminal.

### Restart the server:
Just run `npm run dev` again.

---

## 📝 Editing Portfolio Content

All your portfolio content lives in the `data/` folder. You don't need to know React to edit it!

### Your Personal Info
📄 **File**: `data/personal.ts`

Edit your name, title, tagline, email, GitHub, LinkedIn, and bio.

### Your Projects
📄 **File**: `data/projects.ts`

Each project is an object in the `projects` array. To add a new project:

1. Open `data/projects.ts`
2. Copy an existing project object
3. Paste it at the end of the array (before the closing `]`)
4. Update the fields:
   - `id`: unique identifier (lowercase, hyphens)
   - `title`: project name
   - `description`: short description (shown on card)
   - `techStack`: array of technologies
   - `githubUrl`: link to GitHub repo
   - `demoUrl`: link to live demo, or `null` if none
   - `imageUrl`: path to image in `public/images/projects/`

**Example:**
```typescript
{
  id: "my-new-project",
  title: "My Amazing AI Project",
  description: "A short description of what it does.",
  longDescription: "A longer description for the chatbot.",
  techStack: ["Python", "PyTorch", "FastAPI"],
  imageUrl: "/images/projects/my-project.webp",
  githubUrl: "https://github.com/yourusername/my-project",
  demoUrl: null, // No demo yet — button will be grayed out
  category: "Deep Learning",
},
```

### Your Skills
📄 **File**: `data/skills.ts`

Edit the skill categories and the skills within each category.

### Your Certifications
📄 **File**: `data/certifications.ts`

Add, remove, or edit certifications.

### Your Resume
📄 **File**: `public/resume.pdf`

Replace this file with your actual resume PDF. Keep the filename as `resume.pdf`.

---

## 🤖 Updating Chatbot Knowledge

The chatbot's knowledge comes from:
📄 **File**: `knowledge_base/portfolio_context.ts`

This file contains ALL the information the chatbot can use to answer questions. Update it whenever you change your portfolio content.

**Tips:**
- Keep the format structured (sections with === headers)
- Be factual — the AI only knows what's in this file
- Add new sections for blogs, publications, or experience
- See `knowledge_base/README.md` for future RAG expansion

---

## 🌐 Deploying on Vercel

Vercel is a free hosting platform that works perfectly with Next.js.

### Step 1: Push your code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add `OPENROUTER_API_KEY` with your API key as the value
6. Click **"Deploy"**
7. ✅ Your portfolio is live! Vercel gives you a URL like `your-project.vercel.app`

### Custom Domain (optional)

In Vercel dashboard → Settings → Domains → Add your custom domain.

---

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | Optional* | API key from [openrouter.ai](https://openrouter.ai) for AI chatbot |
| `OPENROUTER_MODEL` | No | Override default AI model (default: `meta-llama/llama-4-maverick`) |

*The chatbot works with fallback responses without an API key, but AI-powered responses require it.

---

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app pages and API routes
│   ├── layout.tsx          # Root layout (fonts, SEO metadata)
│   ├── page.tsx            # Main page (assembles all sections)
│   └── api/chat/route.ts   # Chatbot API endpoint (server-side)
│
├── components/             # React UI components
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero/landing section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Technical skills grid
│   ├── Projects.tsx        # Projects section
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Certifications.tsx  # Certifications section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   ├── SectionWrapper.tsx  # Reusable animated section wrapper
│   └── chatbot/            # AI chatbot components
│       ├── ChatBot.tsx     # Main chatbot (FAB + panel)
│       ├── ChatMessage.tsx # Message bubble
│       └── ChatInput.tsx   # Input field
│
├── data/                   # Portfolio content (EDIT THESE)
│   ├── personal.ts         # Your name, bio, links
│   ├── projects.ts         # Your projects
│   ├── skills.ts           # Your skills
│   └── certifications.ts   # Your certifications
│
├── knowledge_base/         # Chatbot knowledge (EDIT THIS)
│   ├── portfolio_context.ts # Chatbot's knowledge about you
│   └── README.md           # How to expand chatbot knowledge
│
├── embeddings/             # Future: vector embeddings
├── vector_store/           # Future: vector database
├── public/                 # Static files
│   ├── resume.pdf          # Your resume (replace this)
│   └── images/projects/    # Project thumbnails
│
├── .env.example            # Environment variables template
├── .env.local              # Your local env variables (not committed)
└── README.md               # This file
```

---

## ❌ Common Errors and Fixes

### "Module not found" error
```bash
npm install
```
Re-run this to make sure all dependencies are installed.

### "Port 3000 is already in use"
Another process is using port 3000. Either:
- Stop the other process
- Or run on a different port: `npm run dev -- -p 3001`

### Chatbot says "having trouble connecting"
- Check that your `OPENROUTER_API_KEY` is set in `.env.local`
- Make sure the API key is valid at [openrouter.ai/keys](https://openrouter.ai/keys)
- The chatbot still works with fallback responses without a key

### Build errors with Turbopack
If you see Turbopack errors during build, use:
```bash
npx next build --webpack
```

### Styles look wrong / not loading
Make sure Tailwind CSS is properly configured:
```bash
npm install tailwindcss @tailwindcss/postcss --save-dev
```

---

## 🛡️ Security

- API keys are **never** exposed to the frontend
- All OpenRouter calls happen **server-side** in `app/api/chat/route.ts`
- `.env.local` is gitignored — your secrets stay on your machine
- Only `.env.example` (with placeholder values) is committed

---

## 📄 License

MIT License. Feel free to use this as a template for your own portfolio.
