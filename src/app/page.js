import Image from "next/image";
import Home from "@/app/Components/Home/Home";


export const metadata = {
    title: "Play Store - Home",
    description: "View your application dashboard and installed apps",
};


export default function Page() {
  return (
    <main className="w-full">
      <Home />
    </main>
  );
}
