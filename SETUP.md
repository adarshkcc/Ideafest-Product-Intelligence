# 🔍 Product Insight AI

An AI-powered Next.js application that fetches product data from MockAPI and provides intelligent analysis using Groq AI.

## Features

✨ **Key Features:**
- 📦 Fetch product data by SKU from MockAPI
- 🤖 AI-powered product analysis using Groq
- 💬 Natural language query support
- 🎨 Beautiful, responsive UI with Tailwind CSS
- ⚡ Fast and modern Next.js 16 architecture

## Setup Instructions

### 1. Get Your Groq API Key

1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create an API key
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
GROQ_API_KEY=your_groq_api_key_here
NEXT_PUBLIC_MOCKAPI_URL=https://69cd1fa1ddc3cabb7bd2215d.mockapi.io/api/product/Product
```

Replace `your_groq_api_key_here` with your actual Groq API key.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **Enter Product SKU**: Find a valid product SKU from the MockAPI
   - Try SKU like: `1`, `2`, `3`, etc.

2. **Ask a Question**: Type any question about the product
   - Examples:
     - "What are the key features?"
     - "Is this product good for beginners?"
     - "What's the price and availability?"
     - "Compare this to similar products"

3. **Get AI Analysis**: Click "Analyze Product" button

4. **View Results**: Get:
   - 📦 Product details from MockAPI
   - ✨ AI-powered analysis from Groq
   - 💡 Intelligent insights and recommendations

## API Routes

### POST `/api/analyze`

Analyzes a product based on user query.

**Request:**
```json
{
  "sku": "1",
  "query": "What are the main features?"
}
```

**Response:**
```json
{
  "success": true,
  "sku": "1",
  "productData": { ... },
  "query": "What are the main features?",
  "analysis": "AI-generated analysis here..."
}
```

## Project Structure

```
product-insight/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # Groq analysis API
│   ├── page.tsx                  # Main interface
│   └── layout.tsx
├── .env.local                    # Environment variables
├── package.json
└── tailwind.config.ts
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS 4**: Styling
- **Groq AI**: Groq AI integration
- **Axios**: HTTP client for API calls
- **TypeScript**: Type-safe development

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key | ✅ Yes |
| `NEXT_PUBLIC_MOCKAPI_URL` | MockAPI product endpoint | ✅ Yes |

## Troubleshooting

### "Product not found" Error
- Check if the SKU exists in the MockAPI
- Verify the MockAPI URL is correct
- Try with SKU `1` to test

### "API Error" or Groq issues
- Verify your Groq API key is valid
- Check your API key has proper permissions
- Ensure you haven't hit rate limits

### Build errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## API Documentation

### MockAPI Product Structure

Example product from MockAPI:
```json
{
  "id": "1",
  "sku": "PROD001",
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "category": "Electronics",
  ...
}
```

## Performance Tips

- ✅ Product data is cached in browser
- ✅ Groq analysis is generated on-demand
- ✅ Results are displayed with minimal latency
- ✅ Optimized for mobile and desktop

## License

MIT

## Support

For issues or questions, check:
- [Groq Documentation](https://console.groq.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Made with ❤️ for AI-powered product insights
