import React, { useState } from 'react';

export default function Profil() {
  const [user, setUser] = useState({
    isim: 'Asel Ünlü',
    yas: 22,
    bio: 'Merhaba! Ben Asel, bilgisayar mühendisiyim.'
  });

  return (
    <div className="bg-white p-10 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Profil</h2>
      <div className="space-y-5 border-b pb-10">
        <div>
          <label className="font-bold block text-sm text-gray-700 mb-1">İsim:</label>
          <input className="w-full border p-2.5 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" value={user.isim} onChange={e => setUser({ ...user, isim: e.target.value })} />
        </div>
        <div>
          <label className="font-bold block text-sm text-gray-700 mb-1">Yaş:</label>
          <input type="number" className="w-full border p-2.5 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" value={user.yas} onChange={e => setUser({ ...user, yas: Number(e.target.value) })} />
        </div>
        <div>
          <label className="font-bold block text-sm text-gray-700 mb-1">Biyografi:</label>
          <textarea className="w-full border p-2.5 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" rows="3" value={user.bio} onChange={e => setUser({ ...user, bio: e.target.value })} />
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-xl font-bold mb-4 text-blue-800 underline">Profil Bilgileri</h3>
        <p className="mb-2"><strong>İsim:</strong> {user.isim}</p>
        <p className="mb-2"><strong>Yaş:</strong> {user.yas}</p>
        <p><strong>Biyografi:</strong> {user.bio}</p>
      </div>
    </div>
  );
}