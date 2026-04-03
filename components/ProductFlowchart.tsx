'use client';

import React from 'react';

interface ProductData {
  name: string;
  sku: string;
  image: string;
  brand?: Array<{ id: string; name: string; image?: string }>;
  store?: Array<{ id: string; name: string; location?: string }>;
  category: Array<{ id: string; name: string; image: string }>;
  catalog: Array<{ id: string; name: string }>;
  inventory: Array<{ quantity: number; inventory_name: string }>;
  pricelist: Array<{
    name: string;
    price: number;
    activation: string;
    expiry: string;
  }>;
}

interface ProductFlowchartProps {
  productData: ProductData;
}

export function ProductFlowchart({ productData }: ProductFlowchartProps) {
  const totalInventory = productData.inventory.reduce(
    (sum, inv) => sum + inv.quantity,
    0
  );
  const maxQuantity = Math.max(...productData.inventory.map((inv) => inv.quantity));
  const activePrice = productData.pricelist.find(
    (p) =>
      new Date(p.activation) <= new Date() && new Date(p.expiry) >= new Date()
  );

  return (
    <div className="w-full rounded-2xl shadow-2xl overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
      border: '2px solid #e0e0e0'
    }}>
      {/* Enterprise Header with Gradient */}
      <div className="px-8 py-12 text-white" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)' }}>
        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">📊 Product Ecosystem</h2>
        <p className="opacity-90 text-lg drop-shadow-lg">Complete product relationships and data flow</p>
      </div>

      <div className="p-10">
        {/* Main Product Card */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 rounded-2xl p-8 border-2 shadow-lg" style={{ 
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 1) 100%)',
            borderColor: '#e0e0e0'
          }}>
            <div className="shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-xl" style={{ background: 'rgba(93, 176, 67, 0.2)' }}></div>
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-40 h-40 object-cover rounded-xl shadow-lg border-2 relative"
                  style={{ borderColor: '#5db043' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3" style={{ color: '#3c4145' }}>{productData.name}</h1>
              <div className="text-white px-4 py-2 rounded-full inline-block mb-4 font-bold shadow-md" style={{ background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 8px 18px rgba(93, 176, 67, 0.3)' }}>
                <span>SKU: {productData.sku}</span>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: '#3c4145' }}>
                Enterprise product with{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.brand?.length || 0}</span>{' '}
                brands,{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.store?.length || 0}</span>{' '}
                stores,{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.category.length}</span>{' '}
                categories,{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.catalog.length}</span>{' '}
                catalogs,{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.inventory.length}</span>{' '}
                locations, and{' '}
                <span className="font-bold" style={{ color: '#5db043' }}>{productData.pricelist.length}</span>{' '}
                pricing tiers.
              </p>
            </div>
          </div>
        </div>

        {/* Connection Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-1" style={{ backgroundImage: 'linear-gradient(to right, transparent, #5db043, #3c4145, #5db043, transparent)' }}></div>
          <span className="font-bold text-lg px-4" style={{ color: '#3c4145' }}>⬇ Data Hierarchy ⬇</span>
          <div className="flex-1 h-1" style={{ backgroundImage: 'linear-gradient(to right, transparent, #5db043, #3c4145, #5db043, transparent)' }}></div>
        </div>

        {/* Six Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-8">
          {/* Brand Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                🏢 Brands
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.brand?.length || 0} items</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.brand && productData.brand.length > 0 ? (
                productData.brand.map((brand, idx) => (
                  <div
                    key={brand.id}
                    className="rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0 group/card relative"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                      boxShadow: '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {brand.image && (
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-14 h-14 rounded-lg object-cover border-0 shadow-md shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate" style={{ color: '#3c4145' }}>{brand.name}</p>
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: '#00ff99', fontSize: '11px' }}>ID: <span style={{ color: '#999' }}>{brand.id.substring(0, 12)}...</span></p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">No brands available</p>
              )}
            </div>
          </div>

          {/* Store Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                🏪 Stores
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.store?.length || 0} items</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.store && productData.store.length > 0 ? (
                productData.store.map((store, idx) => (
                  <div
                    key={store.id}
                    className="rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                      boxShadow: '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                  >
                    <p className="font-bold text-sm mb-2" style={{ color: '#3c4145' }}>{store.name}</p>
                    {store.location && (
                      <p className="text-xs mb-2" style={{ color: '#666' }}>📍 {store.location}</p>
                    )}
                    <span className="inline-block px-2 py-1 rounded-lg text-xs font-semibold" style={{ color: '#00ff99', background: 'rgba(0, 255, 153, 0.1)' }}>
                        {store.id}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">No stores available</p>
              )}
            </div>
          </div>

          {/* Categories Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                🏷️ Categories
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.category.length} items</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.category.map((cat, idx) => (
                <div
                  key={cat.id}
                  className="rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0 group/card relative"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                    boxShadow: '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-14 h-14 rounded-lg object-cover border-0 shadow-md flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate" style={{ color: '#3c4145' }}>{cat.name}</p>
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: '#00ff99', fontSize: '11px' }}>ID: <span style={{ color: '#999' }}>{cat.id.substring(0, 12)}...</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Catalogs Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                📚 Catalogs
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.catalog.length} items</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.catalog.map((cat, idx) => (
                <div
                  key={cat.id}
                  className="rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                    boxShadow: '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                >
                  <p className="font-bold text-sm mb-2" style={{ color: '#3c4145' }}>{cat.name}</p>
                  <span className="inline-block px-2 py-1 rounded-lg text-xs font-semibold" style={{ color: '#00ff99', background: 'rgba(0, 255, 153, 0.1)' }}>
                      {cat.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                📦 Inventory
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.inventory.length} locations</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.inventory.map((inv, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                    boxShadow: '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="font-bold text-sm mb-2" style={{ color: '#3c4145' }}>{inv.inventory_name}</p>
                    </div>
                    <span className="px-3 py-1 rounded-lg font-bold text-lg shadow-md" style={{ color: 'white', background: 'linear-gradient(135deg, #5db043 0%, #4a8c35 100%)' }}>
                      {inv.quantity}
                    </span>
                  </div>
                  <div className="w-full rounded-full h-4 overflow-hidden relative mb-2" style={{ backgroundColor: '#e8e8e8', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.08)' }}>
                    <div
                      className="h-4 rounded-full transition-all duration-500"
                      style={{
                        width: `${(inv.quantity / maxQuantity) * 100}%`,
                        background: 'linear-gradient(135deg, #00ff99 0%, #00cc99 50%, #009966 100%)',
                        boxShadow: '0 4px 12px rgba(0, 255, 153, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
                      }}
                    ></div>
                  </div>
                  <p className="text-xs font-medium" style={{ color: '#00ff99' }}>
                    <span style={{ color: '#999' }}>{((inv.quantity / totalInventory) * 100).toFixed(1)}% of total</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Price List Section */}
          <div className="group">
            <div className="rounded-t-2xl px-6 py-5 text-white shadow-lg relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 50%, #3c4145 100%)', boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.1), 0 10px 25px rgba(0, 0, 0, 0.2)' }}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)' }}></div>
              <h3 className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg relative">
                💰 Pricing Tiers
              </h3>
              <p className="text-sm mt-1 opacity-90 relative">{productData.pricelist.length} prices</p>
            </div>
            <div className="rounded-b-2xl p-4 space-y-3 min-h-96 overflow-y-auto shadow-md" style={{ background: 'linear-gradient(180deg, rgba(248, 249, 250, 1) 0%, rgba(245, 245, 245, 1) 100%)', border: '2px solid #e0e0e0', borderTop: 'none' }}>
              {productData.pricelist.map((price, idx) => {
                const isActive =
                  new Date(price.activation) <= new Date() &&
                  new Date(price.expiry) >= new Date();

                return (
                  <div
                    key={idx}
                    className="rounded-xl p-5 transition-all duration-300 transform hover:scale-105 border-0 cursor-pointer"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(93, 176, 67, 0.1) 0%, rgba(255, 255, 255, 1) 100%)'
                        : 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                      boxShadow: isActive 
                        ? '0 6px 18px rgba(93, 176, 67, 0.2), inset 0 1px 2px rgba(255,255,255,0.8)'
                        : '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isActive 
                        ? 'linear-gradient(135deg, rgba(93, 176, 67, 0.15) 0%, rgba(255, 255, 255, 1) 100%)'
                        : 'linear-gradient(135deg, rgba(93, 176, 67, 0.08) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = isActive 
                        ? '0 10px 28px rgba(93, 176, 67, 0.3), inset 0 1px 2px rgba(255,255,255,0.8)'
                        : '0 8px 24px rgba(93, 176, 67, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isActive 
                        ? 'linear-gradient(135deg, rgba(93, 176, 67, 0.1) 0%, rgba(255, 255, 255, 1) 100%)'
                        : 'linear-gradient(135deg, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)';
                      e.currentTarget.style.boxShadow = isActive 
                        ? '0 6px 18px rgba(93, 176, 67, 0.2), inset 0 1px 2px rgba(255,255,255,0.8)'
                        : '0 4px 15px rgba(93, 176, 67, 0.12), inset 0 1px 2px rgba(255,255,255,0.8)';
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="font-bold text-sm mb-2" style={{ color: '#3c4145' }}>{price.name}</p>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                          style={{
                            background: isActive 
                              ? 'linear-gradient(135deg, #5db043 0%, #4a8c35 100%)'
                              : 'linear-gradient(135deg, #999 0%, #666 100%)',
                          }}
                        >
                          {isActive ? '✓ Active' : 'Inactive'}
                        </span>
                      </div>
                      <span className="font-bold text-3xl" style={{ color: '#5db043' }}>₹{price.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="rounded-lg p-3" style={{ background: 'linear-gradient(135deg, rgba(0, 153, 204, 0.1) 0%, rgba(0, 153, 204, 0.05) 100%)', border: '1px solid rgba(0, 153, 204, 0.3)' }}>
                        <p className="text-xs font-semibold mb-1" style={{ color: '#0099cc' }}>From</p>
                        <p className="text-xs font-bold" style={{ color: '#3c4145' }}>{new Date(price.activation).toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' })}</p>
                      </div>
                      <div className="rounded-lg p-3" style={{ background: 'linear-gradient(135deg, rgba(255, 68, 68, 0.1) 0%, rgba(255, 68, 68, 0.05) 100%)', border: '1px solid rgba(255, 68, 68, 0.3)' }}>
                        <p className="text-xs font-semibold mb-1" style={{ color: '#ff4444' }}>Till</p>
                        <p className="text-xs font-bold" style={{ color: '#3c4145' }}>{new Date(price.expiry).toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' })}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e0e0e0' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#3c4145' }}>📈 Enterprise Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #3c4145 0%, #2a2d31 100%)', boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)' }}>
              <p className="text-sm font-semibold mb-2 opacity-90">Categories</p>
              <p className="text-4xl font-bold drop-shadow-lg">{productData.category.length}</p>
              <p className="text-xs mt-2 opacity-90">Total</p>
            </div>

            <div className="rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105" style={{ background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
              <p className="text-sm font-semibold mb-2 opacity-95">Catalogs</p>
              <p className="text-4xl font-bold drop-shadow-lg">{productData.catalog.length}</p>
              <p className="text-xs mt-2 opacity-95">Total</p>
            </div>

            <div className="rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105" style={{ background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
              <p className="text-sm font-semibold mb-2 opacity-95">Locations</p>
              <p className="text-4xl font-bold drop-shadow-lg">{productData.inventory.length}</p>
              <p className="text-xs mt-2 opacity-95">Warehouses</p>
            </div>

            <div className="rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105" style={{ background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
              <p className="text-sm font-semibold mb-2 opacity-95">Total Stock</p>
              <p className="text-4xl font-bold drop-shadow-lg">{totalInventory}</p>
              <p className="text-xs mt-2 opacity-95">Units</p>
            </div>

            <div className="rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105" style={{ background: 'linear-gradient(90deg, #4a8c35 0%, #5db043 50%, #6ec956 100%)', boxShadow: '0 12px 28px rgba(93, 176, 67, 0.35)' }}>
              <p className="text-sm font-semibold mb-2 opacity-95">Active Price</p>
              <p className="text-4xl font-bold drop-shadow-lg">${activePrice?.price || 'N/A'}</p>
              <p className="text-xs mt-2 opacity-95">Current</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}