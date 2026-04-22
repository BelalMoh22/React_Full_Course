import { useUserContext } from "../../contexts/userDemo";

// useContext
export function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}

export default function Sidebar() {
  // Consumer
  const user = useUserContext();
  return (
    <div>
      <h3>Sidebar</h3>
      <p>{user.name}</p>
      <p>{user.isSubscribed ? "Subscribed" : "Not Subscribed"}</p>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();
  return (
    <div>
      <h3>Profile</h3>
      <p>{user.name}</p>
    </div>
  );
}
