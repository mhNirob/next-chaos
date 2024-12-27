"use client"

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <div> Nirob </div>
      <Button text={"Click"} onClick={() => {
        console.log("in client !");
      }}/>
    </div>
  );
}
