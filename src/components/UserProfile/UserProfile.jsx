// User Profile
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserProfile() {
  return (
    <div className="user-profile">
      <Avatar className="user-img">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="user-email">example@gmail.com</div>
    </div>
  );
}

export default UserProfile;
