'use client';

import { useState } from 'react';
import axios from 'axios';
import { ProductFlowchart } from '@/components/ProductFlowchart';

interface ProductAnalysisResult {
  success: boolean;
  sku: string;
  productData: Record<string, unknown>;
  query: string;
  analysis: string;
}

export default function Home() {
  const [sku, setSku] = useState('');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<ProductAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!sku.trim()) {
      setError('Please enter a product SKU');
      return;
    }

    if (!query.trim()) {
      setError('Please enter a query');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/analyze', {
        sku: sku.trim(),
        query: query.trim(),
      });

      setResult(response.data);
    } catch (err) {
      const errorMessage =
        axios.isAxiosError(err) && err.response?.data?.error
          ? err.response.data.error
          : 'Failed to analyze product. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f4f8 100%)' }}>
      {/* Enterprise Header with Dark Gray Gradient */}
      <header className="border-b shadow-xl sticky top-0 z-50" style={{ 
        background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)',
        borderColor: '#5db043'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md" style={{ background: 'rgba(93, 176, 67, 0.3)' }}></div>
              <img
                src="https://admin-z10-qa.znodecorp.com/Content/Images/header-admin-logo.png"
                alt="Company Logo"
                className="h-12 object-contain drop-shadow-xl relative"
              />
            </div>
            <div className="flex flex-col border-l-4 pl-6" style={{ borderColor: '#5db043' }}>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">Product Intelligence</h1>
              <p className="text-xs font-semibold" style={{ color: '#5db043' }}>Enterprise Analytics Platform</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm text-gray-300">Powered by</span>
            <span className="font-semibold text-sm px-4 py-2 rounded-full text-white relative overflow-hidden" style={{ 
              background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FDB833 100%)',
              boxShadow: '0 8px 20px rgba(255, 107, 53, 0.35)'
            }}>
              <span className="relative">✨ Groq AI</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Analysis Form Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form Card */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ 
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '2px solid #e0e0e0'
                }}>
                  <div className="px-8 py-8 border-b" style={{ 
                    background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 100%)',
                    borderColor: '#e0e0e0',
                    color: 'white'
                  }}>
                    <h2 className="text-3xl font-bold drop-shadow-lg">📊 Product Analysis</h2>
                    <p className="text-sm mt-2 opacity-90">Enter product SKU and your question for AI-powered insights</p>
                  </div>
                  <form onSubmit={handleAnalyze} className="p-8 space-y-6">
                    {/* SKU Input */}
                    <div>
                      <label htmlFor="sku" className="block text-sm font-bold mb-3" style={{ color: '#3c4145' }}>
                        Product SKU
                      </label>
                      <input
                        id="sku"
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        placeholder="e.g., SKU001"
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition shadow-sm"
                        style={{ 
                          borderColor: '#e0e0e0',
                          background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                          color: '#3c4145'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#5db043'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                      />
                      <p className="mt-2 text-xs" style={{ color: '#999' }}>
                        Enter the product identifier from your catalog
                      </p>
                    </div>

                    {/* Query Input */}
                    <div>
                      <label htmlFor="query" className="block text-sm font-bold mb-3" style={{ color: '#3c4145' }}>
                        Your Question
                      </label>
                      <textarea
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., What are the key specifications? Is it enterprise-ready?"
                        rows={4}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition resize-none shadow-sm"
                        style={{ 
                          borderColor: '#e0e0e0',
                          background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                          color: '#3c4145'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#5db043'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                      />
                      <p className="mt-2 text-xs" style={{ color: '#999' }}>
                        Our AI will analyze the product and provide comprehensive insights
                      </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="rounded-lg p-4" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)', border: '2px solid #ef4444' }}>
                        <p style={{ color: '#dc2626' }} className="font-semibold">⚠️ {error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed shadow-lg"
                      style={{ 
                        background: loading 
                          ? 'linear-gradient(90deg, #999 0%, #666 100%)'
                          : 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)',
                        opacity: loading ? 0.7 : 1,
                        boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)'
                      }}
                      onMouseEnter={(e) => !loading && (e.currentTarget.style.boxShadow = '0 18px 40px rgba(93, 176, 67, 0.45)')}
                      onMouseLeave={(e) => !loading && (e.currentTarget.style.boxShadow = '0 12px 28px rgba(93, 176, 67, 0.35)')}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <span className="animate-spin">⚙️</span> Analyzing with AI...
                          </>
                        ) : (
                          '🚀 Analyze Product'
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 relative" style={{ background: 'linear-gradient(135deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
                  <div className="text-4xl mb-2">📊</div>
                  <h3 className="font-bold mb-1 drop-shadow-lg">Enterprise Ready</h3>
                  <p className="text-sm opacity-95">Production-grade analytics for your products</p>
                </div>
                <div className="rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 relative" style={{ background: 'linear-gradient(135deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
                  <div className="text-4xl mb-2">🤖</div>
                  <h3 className="font-bold mb-1 drop-shadow-lg">AI-Powered</h3>
                  <p className="text-sm opacity-95">Groq for intelligent insights</p>
                </div>
                <div className="rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 relative" style={{ background: 'linear-gradient(135deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="font-bold mb-1 drop-shadow-lg">Real-time</h3>
                  <p className="text-sm opacity-95">Instant product analysis and insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div className="space-y-8 animate-in">
              {/* Product Flowchart */}
              <ProductFlowchart productData={result.productData as Record<string, unknown>} />

              {/* Analysis Results */}
              <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                border: '2px solid #e0e0e0'
              }}>
                {/* Tab-like Header */}
                <div className="grid grid-cols-3 border-b" style={{ borderColor: '#e0e0e0' }}>
                  <div className="px-6 py-5 border-r" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 100%)', color: 'white', borderColor: '#e0e0e0' }}>
                    <h3 className="font-bold drop-shadow-lg">📦 Product</h3>
                  </div>
                  <div className="px-6 py-5 border-r" style={{ color: '#3c4145', borderColor: '#e0e0e0' }}>
                    <h3 className="font-bold">❓ Question</h3>
                  </div>
                  <div className="px-6 py-5" style={{ color: '#3c4145' }}>
                    <h3 className="font-bold">✨ Analysis</h3>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Product Info */}
                  <div>
                    <h4 className="text-lg font-bold mb-4" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #5db043 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Product Details
                    </h4>
                    <div className="rounded-lg p-4 mb-4 border" style={{ background: 'linear-gradient(135deg, rgba(93, 176, 67, 0.05) 0%, rgba(60, 65, 69, 0.03) 100%)', borderColor: '#e0e0e0' }}>
                      <p className="mb-2">
                        <span className="font-semibold" style={{ color: '#3c4145' }}>SKU:</span>{' '}
                        <span className="font-bold" style={{ color: '#5db043' }}>{result.sku}</span>
                      </p>
                    </div>
                    <div className="rounded-lg p-4 border overflow-auto max-h-48" style={{ background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(249, 249, 249, 1) 100%)', borderColor: '#e0e0e0' }}>
                      <pre className="text-xs whitespace-pre-wrap font-mono" style={{ color: '#3c4145' }}>
                        {JSON.stringify(result.productData, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* Question */}
                  <div>
                    <h4 className="text-lg font-bold mb-4" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #5db043 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Your Question
                    </h4>
                    <div className="rounded-lg p-6 border-2 border-l-4" style={{ background: 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(248, 249, 250, 1) 100%)', borderColor: '#e0e0e0', borderLeftColor: '#5db043' }}>
                      <p className="italic text-lg" style={{ color: '#3c4145' }}>&ldquo;{result.query}&rdquo;</p>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div>
                    <h4 className="text-lg font-bold mb-4" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #5db043 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      🤖 AI-Powered Insight
                    </h4>
                    <div className="rounded-lg p-6 border-2 border-l-4" style={{ background: 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(248, 249, 250, 1) 100%)', borderColor: '#e0e0e0', borderLeftColor: '#5db043' }}>
                      <p className="leading-relaxed whitespace-pre-wrap text-base" style={{ color: '#3c4145' }} dangerouslySetInnerHTML={{__html:result.analysis}}/>
                     
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => {
                        setResult(null);
                        setSku('');
                        setQuery('');
                      }}
                      className="flex-1 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                        background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)',
                        boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 18px 40px rgba(93, 176, 67, 0.45)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 12px 28px rgba(93, 176, 67, 0.35)'}
                    >
                      🔄 New Analysis
                    </button>
                    <button
                      onClick={() => {
                        setSku('');
                        setQuery('');
                        setResult(null);
                      }}
                      className="flex-1 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                        background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)',
                        boxShadow: '0 12mm 28px rgba(93, 176, 67, 0.35)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 18px 40px rgba(93, 176, 67, 0.45)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 12px 28px rgba(93, 176, 67, 0.35)'}
                    >
                      ✕ Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!result && !loading && (
            <div className="mt-16 text-center">
              <div className="inline-block rounded-full p-8 mb-6 border-2 shadow-lg" style={{ 
                background: 'linear-gradient(135deg, rgba(93, 176, 67, 0.1) 0%, rgba(60, 65, 69, 0.05) 100%)',
                borderColor: '#5db043'
              }}>
                <span className="text-6xl drop-shadow-lg">📊</span>
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#3c4145' }}>Ready for Analysis</h3>
              <p className="mb-8 text-lg" style={{ color: '#666' }}>Enter a product SKU and your question to get started with AI-powered insights</p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="rounded-xl p-6 border-2 transition shadow-md hover:shadow-xl transform hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 249, 250, 1) 100%)', borderColor: '#e0e0e0' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#5db043'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}>
                  <div className="text-5xl mb-3">1️⃣</div>
                  <h4 className="font-bold mb-2" style={{ color: '#3c4145' }}>Enter SKU</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Provide the product identifier</p>
                </div>
                <div className="rounded-xl p-6 border-2 transition shadow-md hover:shadow-xl transform hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 249, 250, 1) 100%)', borderColor: '#e0e0e0' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#5db043'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}>
                  <div className="text-5xl mb-3">2️⃣</div>
                  <h4 className="font-bold mb-2" style={{ color: '#3c4145' }}>Ask Question</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Query about the product</p>
                </div>
                <div className="rounded-xl p-6 border-2 transition shadow-md hover:shadow-xl transform hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 249, 250, 1) 100%)', borderColor: '#e0e0e0' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#5db043'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}>
                  <div className="text-5xl mb-3">3️⃣</div>
                  <h4 className="font-bold mb-2" style={{ color: '#3c4145' }}>Get Insights</h4>
                  <p className="text-sm" style={{ color: '#666' }}>AI-powered analysis</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
