import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | PurePressa</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Helmet>

      <Section className="min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <p className="text-6xl md:text-8xl font-bold text-primary">404</p>
              <h1 className="text-3xl md:text-4xl font-bold text-ink">
                Page Not Found
              </h1>
              <p className="text-base md:text-lg text-body leading-relaxed">
                Sorry, we couldn't find the page you're looking for. It might
                have been moved or doesn't exist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/" size="lg">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
              <Button as={Link} to="/shop" size="lg" variant="outline">
                <Search className="w-5 h-5" />
                Browse Products
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
