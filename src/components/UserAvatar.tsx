import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div>
      {/* <img src={session.user.image} alt="User Avatar" /> */}
      <Image
        src={session.user.image as string}
        alt="Profile Picture"
        height={50}
        width={50}
        className="rounded-full"
      />
    </div>
  );
}
