

export const UserFriendList = ({friends}) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map((friend) => (
          <li className="item" key={friend.id}>
            <span className={friend.isOnline ? "green" : "red" }></span>
           <img className="friend-avatar" src={friend.avatar} alt="User avatar" width="48" />
           <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
