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

  return (
    <div>
      {isLoading ? (
        <Loading message="Loading Users..." />
      ) : (
        <div>
          {user.map((userItem, index) => (
            <Card key={index} user={userItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
