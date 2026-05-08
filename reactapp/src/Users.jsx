import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.website}
        </p>
      ))}
    </div>
  );
}

export default Users;