import Image from "next/image";
import { add } from "@autospace/sample-lib";

export default function Home() {
  return (
    <div>{add(1,232)}</div>
  );
}
