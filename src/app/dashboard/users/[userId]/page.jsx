import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetailsPage;
