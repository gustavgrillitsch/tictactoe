import Board from "../components/Board";
import {MyCarousel} from "@/components/MyCarousel";

export default function Home() {
  return (
      <main className="dark flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to the virtual Arcade</h1>
          <MyCarousel/>
      </main>
  );
}
