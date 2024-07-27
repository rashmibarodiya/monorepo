// src/app/admin/page.tsx

import React from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/admin/signup">Admin Signup</Link></li>
          {/* Add more admin-related links here */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
