export default async function Home() {
  await new Promise((r) => setTimeout(r, 2000));

  return <main className="text-white">Home</main>;
}
