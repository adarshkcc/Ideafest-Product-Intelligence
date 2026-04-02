import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(request: NextRequest) {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const body = await request.json();
    const { sku, query } = body;

    if (!sku || !query) {
      return NextResponse.json(
        { error: 'SKU and query are required' },
        { status: 400 }
      );
    }

    // Fetch product from MockAPI
    const mockApiUrl = process.env.NEXT_PUBLIC_MOCKAPI_URL;
    console.log('MockAPI URL:', mockApiUrl);
    const productUrl = `${mockApiUrl}/${sku}`;

    console.log('Fetching product from:', productUrl);

    const productResponse = await fetch(productUrl);

    if (!productResponse.ok) {
      return NextResponse.json(
        { error: `Product not found. Status: ${productResponse.status}` },
        { status: 404 }
      );
    }

    const productData = await productResponse.json();

    // Prepare data for Groq
    const productContext = `
Product Information:
${JSON.stringify(productData, null, 2)}

User Query: ${query}

Please analyze the product information and provide a helpful response to the user's query. Be concise and informative.
    `;

    // Call Groq AI for analysis
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: productContext,
        },
      ],
    });
    const analysisText = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      success: true,
      sku,
      productData,
      query,
      analysis: analysisText,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 }
    );
  }
}
