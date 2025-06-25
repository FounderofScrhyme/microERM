import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>ログイン</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
      <Button variant={"destructive"}>click me</Button>
    </div>
  );
}
