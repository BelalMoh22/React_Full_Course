"use client"; // this line is used to make the code run on the client side
import Calculate from "@/features/calculations/Calculate";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-white px-4 py-10 font-sans text-slate-950">
      <Calculate />
    </div>
  );
}
