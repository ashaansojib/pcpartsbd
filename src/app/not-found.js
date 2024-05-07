import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-screen-md mx-auto text-center p-3">
      <h2 className="text-2xl font-semibold text-red-500">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-accent" href="/">Return Home</Link>
    </div>
  );
}
