'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/admin/users'); // 👈 Connect to your API
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
