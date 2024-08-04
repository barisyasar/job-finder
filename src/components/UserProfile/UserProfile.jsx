// User Profile
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useZustand from "@/state/useZustand";

function UserProfile() {
  const { user } = useZustand();

  return (
    <div className="user-profile">
      <Avatar className="user-img">
        <AvatarImage src={user.profileImage} alt={user.email} />
        <AvatarFallback>{user.email.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="user-email hidden sm:block">{user.email}</div>
    </div>
  );
}

export default UserProfile;
