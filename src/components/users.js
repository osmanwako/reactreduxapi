import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/usersSlice";
import UserList from "./userList";
import { useEffect } from "react";

const Users = () => {
    const { users, isloading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => dispatch(fetchUsers(10));
    }, []);
    console.log(users, isloading);
    if (error) {
        return <div>{error}</div>;
    }
    else if (isloading) {
        return <div>Loading ....</div>;
    }
    else {
        return <ul>
            {
                users.map((user, id) => <UserList key={id} user={user} />)
            }
        </ul>;
    }
};

export default Users;