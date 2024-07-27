// src/app/admin/page.tsx

import React from 'react';
import Link from 'next/link';

const ClientDashboard = () => {
  return (
    <div>
      <h1>client Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/client/signup">client Signup</Link></li>
          {/* Add more admin-related links here */}
        </ul>
      </nav>
    </div>
  );
};

export default ClientDashboard;
