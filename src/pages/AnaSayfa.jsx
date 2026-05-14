import React, { useState } from 'react';

export default function AnaSayfa() {
  const [sayac, setSayac] = useState(0);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-left">
      <h1 className="text-3xl font-bold text-[#1e3a8a] mb-4">Ana Sayfa</h1>
      <p className="text-gray-600 mb-6 font-medium">
        Hoşgeldiniz! Sosyal medya uygulamamıza hoşgeldiniz.
      </p>
      
      <button className="border border-gray-300 px-4 py-1 rounded text-sm hover:bg-gray-50 mb-8 block">
        Hesap Değiştir
      </button>

      <div className="border-t pt-6">
        <p className="text-lg font-semibold mb-4 text-gray-800">Sayaç: {sayac}</p>
        <div className="flex gap-4">
          <button 
            onClick={() => setSayac(prev => prev + 1)} 
            className="bg-gray-200 text-gray-800 px-4 py-1 rounded border hover:bg-gray-300 text-sm"
          >
            Arttır
          </button>
          <button 
            onClick={() => setSayac(prev => prev - 1)} 
            className="bg-gray-200 text-gray-800 px-4 py-1 rounded border hover:bg-gray-300 text-sm"
          >
            Azalt
          </button>
        </div>
      </div>
    </div>
  );
}