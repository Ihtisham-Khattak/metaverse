import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    {/* 1. */}
    <div className="relative">
      <About />
      <div className="gradient-04 z-0" />
      <Explore />
    </div>

    {/* 2. */}
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>

    <World />
    {/* 3. */}
    <div className="relative">
      <Insights />
      <div className="gradient-02 z-0" />
      <Feedback />
    </div>

    {/* 4. */}
    <div className="relative">
      {/* <Feedback /> */}
      <div className="gradient-01 z-0" />
      <Footer />
    </div>
  </div>
);

export default Page;
