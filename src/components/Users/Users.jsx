import React from "react";
import { useParams } from "react-router-dom";
function Users() {
  const { userId } = useParams();
  return (
    <div className="text-center m-4 p-4 text-3xl bg-gray-700 text-white">
      Users: {userId}
    </div>
  );
}

export default Users;
