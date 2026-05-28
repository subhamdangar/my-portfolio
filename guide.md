# 🎓 Complete Beginner Guide to Your AI Portfolio

Welcome to your new AI-powered portfolio! This guide will explain exactly how to run the website, where to edit your personal information, and how to set up the AI Chatbot.

---

## 🚀 1. How to Run the Website

To run the website on your own computer, follow these steps:

1. Open your terminal (or command prompt).
2. Navigate to your portfolio folder:
   ```bash
   cd /Users/subham/Desktop/Portfolio
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your web browser and go to: **http://localhost:3000**

To stop the server at any time, go back to your terminal and press **`Ctrl + C`**.

---

## 📝 2. Where to Edit Your Personal Data

You don't need to know React or complex coding to edit your portfolio. All your information is stored in simple data files located in the `data/` folder.

### 👤 Your Name, Bio, and Links
**File to edit:** `data/personal.ts`

Open this file to change:
- Your name (the typing animation will update automatically)
- Your job title and tagline
- Your email, GitHub, and LinkedIn links
- Your biography paragraphs

### 📂 Your Projects
**File to edit:** `data/projects.ts`

This file controls the project cards. Each project has fields like:
- `title`: The name of the project
- `description`: The short summary shown on the card
- `techStack`: The tools you used (e.g., "Python", "React")
- `githubUrl`: Link to your code
- `demoUrl`: Link to your live project (if you don't have one, set it to `null`)
- `aiContext`: **Important!** This is a detailed explanation of the project. The chatbot reads this to answer questions when someone clicks "Ask AI". The more detail you put here, the smarter the AI will sound!

**How to add a new project:** Just copy one of the existing project blocks, paste it at the bottom (before the `]`), and change the details.

### 🛠️ Your Technical Skills
**File to edit:** `data/skills.ts`

Here you can group your skills into categories (like "Machine Learning", "Programming"). Edit the lists to reflect your actual skills.

### 🎓 Your Certifications
**File to edit:** `data/certifications.ts`

List your courses, degrees, or certifications here.

### 🖼️ Your Profile Image and Resume
- **Profile Image:** Replace the file at `public/images/profile.webp` (or `.jpg`/`.png`) with your own square photo.
- **Resume:** Replace the file at `public/resume.pdf` with your actual PDF resume.

---

## 🤖 3. How to Set Up the AI Chatbot API Key

The floating chatbot uses OpenRouter to talk to advanced AI models. Right now, it gives "fallback" responses. To make it truly intelligent, you need to add your API key.

1. Go to [OpenRouter.ai](https://openrouter.ai/) and create a free account.
2. Generate a new API Key.
3. Open your portfolio project folder.
4. Find the file named `.env.example` and **rename** it to `.env.local`. (Or create a new file named `.env.local`).
5. Open `.env.local` and add your key like this:
   ```env
   OPENROUTER_API_KEY=sk-or-v1-your-very-long-api-key-here...
   ```
6. **Restart your server:** If `npm run dev` is currently running, stop it with `Ctrl + C`, then start it again with `npm run dev`.

The chatbot will now use real AI to answer questions based on the information in your `data/projects.ts` and `knowledge_base/portfolio_context.ts` files!

---

## 🧠 4. How to Make the Chatbot Smarter

The chatbot only knows what you tell it! 

**To teach it about you generally:**
Edit the file `knowledge_base/portfolio_context.ts`. Write a comprehensive summary of your background, goals, and expertise.

**To teach it about specific projects:**
Edit the `aiContext` field inside `data/projects.ts` for each project. Explain the architecture, challenges you faced, and why you chose certain technologies.

---

## 🌐 5. How to Deploy to Vercel (Go Live!)

Once you are happy with your portfolio, you can put it on the public internet for free using Vercel.

### Step 1: Upload your code to GitHub
1. Go to [GitHub.com](https://github.com/) and create a new repository (name it something like `my-portfolio`).
2. Do **not** check the box to add a README (leave it completely empty).
3. Open your terminal in your portfolio folder and run these commands (replace `YOUR_USERNAME` with your actual GitHub username):
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Go to [Vercel.com](https://vercel.com/) and create a free account (sign up with GitHub).
2. Click **Add New** -> **Project**.
3. You will see a list of your GitHub repositories. Find `my-portfolio` and click **Import**.

### Step 3: Add your API Key
Before you click Deploy, you need to give Vercel your OpenRouter API key so the chatbot works in production.
1. In the Vercel deployment screen, open the **Environment Variables** section.
2. Under "Key", type: `OPENROUTER_API_KEY`
3. Under "Value", paste your secret key (e.g., `sk-or-v1-...`).
4. Click **Add**.

### Step 4: Deploy!
1. Click the big **Deploy** button.
2. Vercel will build your website. This takes about 1-2 minutes.
3. Once it's done, Vercel will give you a live URL (something like `subham-portfolio.vercel.app`).
4. Congratulations! Your website is live! 🎉
