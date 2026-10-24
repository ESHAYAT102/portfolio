import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function NotFound({ unexpected = false }: { unexpected?: boolean }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = unexpected ? "Something went wrong · Eshayat" : "404 · Eshayat";
    return () => { document.title = previousTitle; };
  }, [unexpected]);

  return (
    <main className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 border-b min-[1000px]:border-x border-ctp-surface1">
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center min-[760px]:px-12 min-[1000px]:px-20">
        <p aria-hidden="true" className="select-none text-[clamp(5rem,14vw,9rem)] font-semibold leading-none tracking-[0.02em] indent-[0.02em] text-primary">{unexpected ? ":(" : "404"}</p>
        <h1 className="mt-5 text-xl font-normal text-ctp-subtext0">{unexpected ? "Something went wrong." : "Page not found."}</h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a href="/" className="inline-flex min-h-11 items-center gap-3 bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-ctp-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><span aria-hidden="true">←</span> Back home</a>
          {unexpected && <button type="button" onClick={() => window.location.reload()} className="min-h-11 px-4 py-3 text-ctp-text underline underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Try again</button>}
        </div>
      </div>
    </main>
  );
}

export function RouteError() {
  const error = useRouteError();
  return <NotFound unexpected={!(isRouteErrorResponse(error) && error.status === 404)} />;
}
