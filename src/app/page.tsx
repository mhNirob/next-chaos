"use client"

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-slate-400">
      <div> Nirob </div>
      <Button text={"Click"} onClick={() => {
        console.log("in client !");
      }}/>
    </div>
  );
}
