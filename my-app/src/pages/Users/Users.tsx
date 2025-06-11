import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/user";
import { User } from "../../api/user";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";

const Users: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id: string) => {
    setUser(prevUsers => prevUsers.filter(user => user._id !== id));
  };

  return (
    <div>
      {isLoading ? (
        <Loading message="Loading Users..." />
      ) : (
        <div>
          {user.map((userItem) => (
            <Card key={userItem._id} user={userItem} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
