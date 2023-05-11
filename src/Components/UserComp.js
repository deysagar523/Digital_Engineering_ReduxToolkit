import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/UserRedux";

const UserComp = () => {
  const users = useSelector((state) => state.usersArr.users);
  const dispatch = useDispatch();
  //   console.log(stateVal);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <div>UserComp</div>
      <ul>
        {users.length > 0
          ? users.map((user) => (
              <li>
                {" "}
                {user.name}.{user.id}
              </li>
            ))
          : []}
      </ul>
    </>
  );
};

export default UserComp;
