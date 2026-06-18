# ATS Gen Pro — Policy Pages

Static policy site for the **ATS Gen Pro** Android app (Google Play Store).

## Routes

| Page | URL |
|------|-----|
| Home | `/` |
| Terms & Conditions | `/terms/` |
| Privacy Policy | `/privacy/` |
| Refund Policy | `/refund/` |

## Local preview

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `ats-gen-pro-policies`).
2. Push this folder to the repo:

```bash
git init
git add .
git commit -m "Add ATS Gen Pro policy pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ats-gen-pro-policies.git
git push -u origin main
```

3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `/ (root)` → Save**.
4. Your site will be live at:

```
https://YOUR_USERNAME.github.io/ats-gen-pro-policies/
```

### Play Store URLs

Use these links in your Google Play Console listing:

- **Privacy Policy:** `https://YOUR_USERNAME.github.io/ats-gen-pro-policies/privacy/`
- **Terms & Conditions:** `https://YOUR_USERNAME.github.io/ats-gen-pro-policies/terms/`
- **Refund Policy:** `https://YOUR_USERNAME.github.io/ats-gen-pro-policies/refund/`
