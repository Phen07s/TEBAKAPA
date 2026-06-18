# 🚀 GitHub Setup Guide for GS Birthday Site

This guide will help you connect your birthday site to GitHub and optionally deploy it online.

## 📋 Prerequisites

- Git installed on your computer (already done! ✅)
- A GitHub account ([Sign up here](https://github.com/join) if you don't have one)

## 🔗 Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `gs-birthday-site` (or choose your own name)
   - **Description**: "A beautiful interactive birthday website with animations and music"
   - **Visibility**: Choose **Public** (for GitHub Pages) or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## 🔄 Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you some commands. Use these commands:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR-USERNAME/gs-birthday-site.git

# Rename your branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### Alternative: Using GitHub Desktop

If you prefer a GUI:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Browse to: `c:\Users\TRETEC\Desktop\Projects\birthday site`
5. Click **Publish repository** in the top bar
6. Choose your repository name and visibility
7. Click **Publish Repository**

## 🌐 Step 3: Deploy to GitHub Pages (Optional)

Make your site live on the internet for free!

### Enable GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes, then refresh the page
7. You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/gs-birthday-site/"**

## 📸 Adding Photos

To add your own birthday photos:

1. Navigate to `image/Birthday!/` folder
2. Add your photos with any names (jpg, png, or gif)
3. The site will automatically load them

**To update on GitHub:**
```bash
git add image/Birthday/*
git commit -m "Added birthday photos"
git push
```

## 🎵 Changing the Music

1. Replace `music/Pika.mp3` with your music file
2. If using a different filename, update `index.html` line 127

**To update on GitHub:**
```bash
git add music/*
git commit -m "Updated birthday music"
git push
```

## 🔄 Making Changes and Updating

Whenever you make changes to the site:

```bash
# See what files changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Describe your changes here"

# Push to GitHub
git push
```

GitHub Pages will automatically update your live site within 1-2 minutes!

## 📁 Current Repository Structure

Your repository now contains:

```
gs-birthday-site/
├── .git/                  # Git configuration (hidden)
├── .gitignore            # Files to ignore in git
├── README.md             # Main documentation
├── GITHUB_SETUP.md       # This file
├── index.html            # Main website file
├── lang.js               # Language translations
├── css/
│   └── index.css
├── jscp/
│   ├── main.js
│   ├── settings.js
│   └── ui.js
├── image/
│   ├── Birthday!/        # Your photo collection
│   ├── logo.png
│   ├── screen.png
│   └── full.png
└── music/
    └── Pika.mp3
```

## 🎯 Quick Reference Commands

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

## 🛠️ Common Issues & Solutions

### Issue: "Permission denied"
**Solution**: You may need to set up SSH keys or use GitHub Desktop instead.

### Issue: "Updates were rejected"
**Solution**: Pull first, then push:
```bash
git pull origin main
git push origin main
```

### Issue: "No remote named origin"
**Solution**: Add the remote again:
```bash
git remote add origin https://github.com/YOUR-USERNAME/gs-birthday-site.git
```

### Issue: "GitHub Pages not working"
**Solution**: 
1. Check that your repository is public
2. Ensure `index.html` is in the root folder
3. Wait 2-5 minutes after enabling Pages
4. Check repository Settings → Pages for error messages

## 🌟 Next Steps

1. ✅ Repository initialized locally
2. ⏭️ Create repository on GitHub
3. ⏭️ Push code to GitHub
4. ⏭️ (Optional) Enable GitHub Pages
5. ⏭️ Share the link with friends!

## 📞 Need Help?

- [GitHub Documentation](https://docs.github.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**🎉 Your birthday site is ready to share with the world! 🎉**
