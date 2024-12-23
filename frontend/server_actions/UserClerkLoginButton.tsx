import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserIcon } from "lucide-react";

export default async function UserClerkLoginButton() {
  const user = await currentUser();

  if (!user)
    return (
      <SignedOut>
        <SignInButton>
          <div className="text-white text-md flex cursor-pointer gap-x-2">
            <UserIcon size={20} />
            Login
          </div>
        </SignInButton>
      </SignedOut>
    );

  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}
