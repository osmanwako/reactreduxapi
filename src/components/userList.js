const UserList = (list) => {
    const { user } = list;
    console.log(user);
    return <li>
        <span className="user-span">id:{user.id.value} </span>
        <span className="user-span">Title:{user.name.title} </span>
        <span className="user-span">First Name:{user.name.first} </span>
        <span className="user-span">Last Name:{user.name.last} </span>
    </li>;

}
export default UserList;