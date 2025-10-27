@echo off
echo 🚀 Building and Deploying Technical Quiz App...
echo.

echo 📦 Installing dependencies...
call npm install

echo 🏗️ Building the application...
call npm run build

echo 🚀 Deploying to GitHub Pages...
call npm run deploy

echo.
echo ✅ Deployment complete!
echo 🌐 Your app will be live at: https://sunbyte16.github.io/technical-quiz-app
echo.
pause