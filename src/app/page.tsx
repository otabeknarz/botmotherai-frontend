import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <section className="py-4">
        {/* Hero Section */}
        <Hero className="my-5 px-5 lg:px-0" />
        {/* End Hero Section */}

        {/* Features Section */}
        <Features className="my-20 px-5 lg:px-0" />
        {/* End Features Section */}

        {/* Pricing Section */}
        <Pricing className="my-20 px-5 lg:px-0" />
        {/* End Pricing Section */}

        {/* Contacts Section */}
        <Contacts className="my-20 px-5 lg:px-0" />
        {/* End Contacts Section */}

        {/* Footer Section */}
        <Footer className="my-5 px-5 lg:px-0" />
        {/* End Footer Section */}
      </section>
    </>
  );
}
