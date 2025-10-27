# 🚀 Deployment Guide

## GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

3. **The GitHub Action will automatically:**
   - Build your React app
   - Deploy to GitHub Pages
   - Your app will be live at: `https://sunbyte16.github.io/technical-quiz-app`

### Method 2: Manual Deployment

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy manually:**
   ```bash
   npm run deploy
   ```

## Other Deployment Options

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Connect your GitHub repo to Vercel
2. Framework preset: Create React App
3. Auto-deploy on push

### Heroku
1. Create a Heroku app
2. Add buildpack: `heroku/nodejs`
3. Deploy from GitHub

## Important Notes

- ✅ The app will show your quiz, NOT the README
- ✅ GitHub Actions handles automatic deployment
- ✅ Your live app URL: `https://sunbyte16.github.io/technical-quiz-app`
- ✅ README only shows in the repository view, not the live app

## Troubleshooting

If you see the README instead of your app:
1. Check if GitHub Pages is set to deploy from `gh-pages` branch
2. Wait 5-10 minutes for deployment to complete
3. Clear browser cache and try again
4. Check the Actions tab for deployment status

---

**© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.**