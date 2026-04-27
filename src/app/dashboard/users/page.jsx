import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  console.log(users);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
      {users.map((user, ind) => (
        <div key={ind} className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>
              {user.email} <br />
            </p>
            <div className="card-actions justify-end">
              <Link
                href={`/dashboard/users/${user.id}`}
                className="btn btn-primary"
              >
                Show Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
