import Card from "@/components/Card";
import Image from "next/image";
import someAction from "./actions/someAction";

export default function Home() {
  return (
      <div>
        <Card title={"Rudraksh"} description={"Hellow from rudraksh"} />
        <button onClick={someAction}>Click Me</button>
      </div>
  );
}
