# 🏗️ iMeetPro Infrastructure Decision Guide

Interactive presentation comparing AWS Self-Hosted vs Managed Services for iMeetPro video conferencing platform.

## 📊 What's Inside

- **10 Slides** covering infrastructure decisions
- LiveKit Cloud vs Self-Hosted comparison
- MongoDB Atlas vs EKS comparison  
- Redis ElastiCache vs EKS comparison
- Complete cost analysis
- 2-week implementation roadmap

## 🚀 Quick Deploy Options

### Option 1: Vercel (Easiest - 2 minutes) ⭐ RECOMMENDED

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy" - Done!

**Your URL:** `https://your-project.vercel.app`

### Option 2: Netlify (Easy - 2 minutes)

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy" - Done!

**Your URL:** `https://your-project.netlify.app`

### Option 3: GitHub Pages (Free - 5 minutes)

1. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

2. Add to package.json scripts:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Update vite.config.js:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'  // Change this!
})
```

4. Deploy:
```bash
npm run deploy
```

**Your URL:** `https://username.github.io/your-repo-name/`

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 GitHub Repository Setup

### Step 1: Create New Repository

```bash
# Go to github.com → New Repository
# Name: imeetpro-infrastructure-presentation
# Make it Public (for free GitHub Pages)
```

### Step 2: Push Code

```bash
# Initialize git
cd imeetpro-presentation
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: iMeetPro infrastructure presentation"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/imeetpro-infrastructure-presentation.git

# Push
git branch -M main
git push -u origin main
```

### Step 3: Share with Team

After deploying to Vercel/Netlify/GitHub Pages, share the URL:
- Vercel: `https://imeetpro-infra.vercel.app`
- Netlify: `https://imeetpro-infra.netlify.app`
- GitHub Pages: `https://your-username.github.io/imeetpro-infrastructure-presentation/`

---

## 📱 Features

- ✅ Responsive design
- ✅ Keyboard navigation (use arrow keys)
- ✅ Click slide indicators to jump
- ✅ Mobile-friendly
- ✅ No backend required - pure static site

---

## 🎯 Presentation Summary

| Approach | Cost (1K users) | Setup Time | Recommendation |
|----------|-----------------|------------|----------------|
| Full AWS | $4,500/mo | 4-5 weeks | ❌ Too complex |
| **Hybrid** | $5,893/mo | 2 weeks | ✅ **Best choice** |
| All Managed | $7,163/mo | 1 week | ❌ Too expensive |

**Final Decision:**
- ✅ LiveKit Cloud (keep current)
- ✅ MongoDB on EKS (self-host)
- ✅ Redis on EKS (self-host)
- ✅ RDS MySQL (AWS managed)

---

## 📞 Contact

For questions about implementation, contact the DevOps team.

---

Built with React + Vite + Tailwind CSS
