import {LoginCard} from "@/components/LoginCard";

export default function Home() {
  return (
      <main className="dark flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-20">Welcome to the virtual Arcade</h1>
          <LoginCard/>
      </main>
  );
}
