import React from 'react';

export default function Gonderiler() {
  const postlar = [
    { id: 1, user: "Kullanıcı 1", content: "Merhaba! Bugün hava çok güzel.", date: "7 Mayıs 2026", likes: 5 },
    { id: 2, user: "Kullanıcı 2", content: "React öğrenmek eğlenceli!", date: "6 Mayıs 2026", likes: 10 },
    { id: 3, user: "Kullanıcı 3", content: "Herkese iyi çalışmalar!", date: "4 Mayıs 2026", likes: 7 },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Gönderiler</h2>
      <textarea className="w-full border p-3 rounded-lg mb-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ne düşünüyorsun?" rows="3"></textarea>
      <button className="bg-blue-700 text-white px-6 py-2 rounded mb-10 hover:bg-blue-800 transition">Gönder</button>
      
      <div className="space-y-6">
        {postlar.map(post => (
          <div key={post.id} className="border p-5 rounded-xl bg-gray-50 shadow-sm relative">
            <span className="absolute top-4 right-4 text-xs text-gray-400 font-medium">{post.date}</span>
            <h4 className="font-bold text-blue-900 mb-2">{post.user}</h4>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex gap-3">
              <button className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100">Beğen ({post.likes})</button>
              <button className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100">Yorum Yap</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}