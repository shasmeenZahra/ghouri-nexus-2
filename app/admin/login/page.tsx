'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/admin/dashboard');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
