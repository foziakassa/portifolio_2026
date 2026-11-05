import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/experiance">Experiance</Link>
      <Link href="/project">Project</Link>
      <Link href="/skill">Skill</Link>
    </div>
  );
}
