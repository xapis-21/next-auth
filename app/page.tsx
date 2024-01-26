import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  return (
    <main className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <Button variant={"secondary"} size="lg">Sign in</Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
