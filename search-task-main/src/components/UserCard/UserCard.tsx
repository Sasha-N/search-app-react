import "./style.css";

interface UserCardProps {
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  };
}

export function UserCard(props: UserCardProps): JSX.Element {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} alt="user" />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
