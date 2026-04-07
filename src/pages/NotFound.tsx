import { Helmet } from "react-helmet-async";
import { Button } from "@/src/components/ui/Button";
import { FadeIn } from "@/src/components/ui/Animations";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ClientFuel</title>
      </Helmet>
      <main className="min-h-[80vh] flex items-center justify-center px-8">
        <FadeIn className="text-center">
          <h1 className="text-[5rem] font-black text-[#1d1b18] mb-4">404</h1>
          <p className="text-xl text-[#5b4137] mb-12">The page you're looking for has been moved or doesn't exist.</p>
          <Button to="/">Back to Home</Button>
        </FadeIn>
      </main>
    </>
  );
};
