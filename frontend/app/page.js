import App from "@/App";

// This is a Server Component — Next.js renders it (and the client component
// tree inside App) to real HTML at build time, which is the whole point of
// the migration off Create React App: search engines and AI crawlers that
// don't run JavaScript now see the actual page content immediately instead
// of an empty <div id="root">.
export default function HomePage() {
  return <App />;
}
