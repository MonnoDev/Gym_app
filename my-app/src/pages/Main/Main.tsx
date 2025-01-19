import React, { useEffect, useState } from "react";
import { getMemberships } from "../../api/membership";
import Loading from "../../components/Loading/Loading";
import { Membership } from "../../api/membership";
import Card from "../../components/Card/Card";

const Main: React.FC = () => {
  const [membership, setMembership] = useState<Membership[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMemberships()
      .then((response) => {
        setMembership(response);
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
      <div className="first">
        <div>
          <h1>Membership Management</h1>
          <p>
            Here you can manage membership packages. Make sure you are not deleting or deactivating packages
            assigned to active users.
          </p>
        </div>
      </div>

      {isLoading ? (
        <Loading message="Loading memberships..."  />
      ) : (
        <div>
          {membership.map((membershipItem, index) => ( 
            <Card key={index} membership={membershipItem} />
          ))}
        </div>
      )}
      </div>
  );
};

export default Main;
