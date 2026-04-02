# 🚀 Deployment Guide

## Deploy Your Product Insight AI App

Your app is production-ready! Here are deployment options:

---

## 🎯 Recommended: Vercel (Easiest)

Vercel is made by Next.js creators - deploy in 2 minutes!

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your repository
4. Click "Deploy"

### Step 3: Add Environment Variables
1. Go to Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_GEMINI_API_KEY` = your_key
   - `NEXT_PUBLIC_MOCKAPI_URL` = the_url

3. Redeploy and you're done! 🎉

---

## 🐳 Docker Deployment

### Create Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build & Run
```bash
docker build -t product-insight .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GEMINI_API_KEY=your_key \
  -e NEXT_PUBLIC_MOCKAPI_URL=url \
  product-insight
```

---

## ☁️ Other Hosting Options

| Platform | Difficulty | Cost |
|----------|-----------|------|
| **Vercel** | ⭐ Easy | Free tier available |
| **Railway** | ⭐⭐ Easy | $5/month starting |
| **Render** | ⭐⭐ Easy | Free tier available |
| **AWS** | ⭐⭐⭐⭐ Hard | Pay as you go |
| **Docker** | ⭐⭐⭐ Medium | Depends on host |

---

## 🔒 Security Checklist

Before deploying:

- ✅ Never commit `.env.local`
- ✅ Use environment variables for API keys
- ✅ Enable HTTPS
- ✅ Set CORS headers if needed
- ✅ Rate limit your API routes
- ✅ Validate user input
- ✅ Use API key with restrictions

---

## 📊 Performance Tips

### Build Optimization
```bash
npm run build
```

### Reduce Bundle Size
- Remove unused dependencies
- Use dynamic imports
- Optimize images

### Caching
- Set cache headers
- Use ISR (Incremental Static Regeneration)
- Cache API responses

---

## 🔄 Continuous Deployment

### GitHub Actions Setup
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - run: npm test
```

---

## 📈 Monitoring

After deployment:
- Set up error tracking (Sentry)
- Monitor performance (New Relic)
- Track analytics (Vercel Analytics)
- Set up alerts for errors

---

## 🚀 Quick Deploy to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set environment variables
vercel env add NEXT_PUBLIC_GEMINI_API_KEY
```

---

## 📚 Deployment Guides

- [Vercel Next.js Guide](https://vercel.com/docs/frameworks/nextjs)
- [Railway Guide](https://railway.app/guide)
- [Render Guide](https://render.com/docs)

---

## 💰 Cost Estimate

| Service | Free Tier | Cost |
|---------|-----------|------|
| Vercel | Yes (12/month) | $20/month Pro |
| Railway | No | $5/month starting |
| Render | Yes (7/day) | $10+/month |
| Gemini API | Yes (50 req/day) | $0.075-0.003/1k tokens |

---

## 🎯 Production Checklist

- [ ] Environment variables set
- [ ] Gemini API key has usage limits
- [ ] Error logging enabled
- [ ] Performance monitoring enabled
- [ ] HTTPS enabled
- [ ] Rate limiting configured
- [ ] Backup & recovery plan
- [ ] Domain configured
- [ ] DNS records updated
- [ ] SSL certificate valid

---

## 🔧 Troubleshooting Deployment

### Build Fails
```bash
npm run build
npm run start
```

### App Won't Start
- Check environment variables
- Verify API keys are correct
- Check logs for errors

### API Not Working
- Test endpoint locally
- Check CORS settings
- Verify API key permissions

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Actions: https://github.com/features/actions

---

**Happy deploying!** 🚀
