import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { username } = useParams();
  return <h1>Profile Page for {username}</h1>;
}
