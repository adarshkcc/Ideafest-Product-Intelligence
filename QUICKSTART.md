# 🚀 Quick Start Guide

## First Time Setup (5 minutes)

### Step 1: Get Gemini API Key
```
Visit: https://aistudio.google.com/app/apikey
→ Click "Create API Key"
→ Copy the key
```

### Step 2: Update .env.local
Edit `.env.local` and paste your key:
```
NEXT_PUBLIC_GEMINI_API_KEY=paste_your_key_here
NEXT_PUBLIC_MOCKAPI_URL=https://69cd1fa1ddc3cabb7bd2215d.mockapi.io/api/product/Product
```

### Step 3: Install & Run
```bash
npm install
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:3000
```

---

## Testing the App

### Test Product SKUs
Try these SKU values to test:
- `1`
- `2`
- `3`
- `4`
- `5`

### Test Queries
Try asking:
- ✅ "What is this product about?"
- ✅ "What are the main features?"
- ✅ "Is this good for beginners?"
- ✅ "How does this compare to competitors?"
- ✅ "What's the value for money?"

---

## Understanding the App Flow

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (page.tsx)                                    │
│  - User enters SKU and Query                            │
│  - Sends POST to /api/analyze                           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  API Route (api/analyze/route.ts)                       │
│  1. Receives {sku, query}                               │
│  2. Fetches product from MockAPI                        │
│  3. Sends to Gemini with context                        │
│  4. Returns analysis                                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  External APIs                                          │
│  • MockAPI: Fetches product data by SKU                 │
│  • Google Gemini: Analyzes with AI                      │
└─────────────────────────────────────────────────────────┘
```

---

## Common Issues & Solutions

### ❌ "Product not found"
**Solution:** Try SKU `1` or verify the MockAPI is accessible

### ❌ "Gemini API Error"
**Solution:** 
- Verify API key in `.env.local`
- Check you have API credit
- Restart dev server after updating .env

### ❌ "Cannot find module '@google/generative-ai'"
**Solution:**
```bash
npm install @google/generative-ai axios
npm run dev
```

### ❌ Port 3000 already in use
**Solution:**
```bash
npm run dev -- -p 3001
```

---

## Project Features Overview

### 🎯 Current Features
- ✅ Product fetching by SKU
- ✅ Gemini AI analysis
- ✅ Beautiful UI with Tailwind CSS
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design

### 🔜 Future Enhancements
- [ ] Product history/bookmarks
- [ ] Compare multiple products
- [ ] Custom analysis templates
- [ ] Export analysis as PDF
- [ ] Search by product name
- [ ] Product recommendations
- [ ] Integration with more APIs

---

## File Structure Explained

```
product-insight/
├── app/
│   ├── api/
│   │   └── analyze/route.ts    ← Gemini analysis endpoint
│   ├── layout.tsx              ← App wrapper
│   └── page.tsx                ← Main UI (the beautiful interface!)
│
├── lib/
│   └── utils.ts                ← Helper functions
│
├── .env.local                  ← Your API keys (SECRET!)
├── package.json                ← Dependencies
├── tailwind.config.ts          ← Styling config
└── SETUP.md                    ← Full setup guide
```

---

## Tips for Best Results

### 💡 Pro Tips
1. **Be specific in queries**: More details = better analysis
2. **Try different phrasings**: "What features?" vs "Tell me about features"
3. **Check product data first**: The analysis is based on fetched data
4. **Wait for loading**: Gemini analysis takes a moment
5. **Try multiple SKUs**: Explore different products

### 🎨 Customization
- Edit `app/page.tsx` to change colors/layout
- Modify prompt in `api/analyze/route.ts` for different analysis style
- Update `lib/utils.ts` to add new utility functions

---

## Troubleshooting Checklist

- [ ] Gemini API key is valid and in `.env.local`
- [ ] MockAPI URL is correct in `.env.local`
- [ ] Development server is running (`npm run dev`)
- [ ] Port 3000 is not in use by another app
- [ ] You've tried a valid SKU (like `1`)
- [ ] Browser console shows no errors (F12)
- [ ] `.env.local` file exists in root directory

---

## Need Help?

1. **Check Documentation:**
   - [Google Generative AI Docs](https://ai.google.dev/)
   - [Next.js 16 Docs](https://nextjs.org/docs)
   - [Tailwind CSS Docs](https://tailwindcss.com/)

2. **Common Errors:**
   - Check terminal for error messages
   - Open browser DevTools (F12)
   - Check `.env.local` is properly formatted

3. **Reset Everything:**
   ```bash
   rm -r node_modules .next
   npm install
   npm run dev
   ```

---

## That's It! 🎉

You now have an AI-powered product analysis app!

**Happy analyzing!** 🚀✨
