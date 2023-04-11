import Header from "@components/shared/Header/Header";
import { ButtonBody, ButtonForm } from "@components/shared/ButtonLink";

import IlustrationWorking from "@assets/illustration-working.svg";

function App() {
  return (
    <div className="overflow-hidden font-Poppins">
      <div className="my-0 mx-auto max-w-6xl">
        <Header />

        {/* intro section */}
        <div className="flex items-center justify-between gap-24 mt-20">
          <div className="flex flex-col justify-between">
            <div className="mb-9">
              <h1 className="mb-1 font-bold text-[80px] text-neutral-very-dark-blue leading-[90px] -tracking-[2px]">
                More than just shorter links
              </h1>
              <p className="font-medium text-[22px] text-neutral-grayish-violet">
                Build your brand's recognition and get detailed insights on how
                your links are performing
              </p>
            </div>
            <div>
              <ButtonBody
                link="#"
                text="Get Started"
              />
            </div>
          </div>

          <img
            src={IlustrationWorking}
            alt="Illustration of a person working"
            className="-mr-80"
          />
        </div>

        {/* shorten link component */}
        <div className="bg-bg-shorten-desktop bg-cover bg-primary-dark-violet px-16 py-12 rounded-xl">
          <form className="flex items-center gap-6">
            <input
              type="text"
              name="url-to-short"
              id="url-to-short"
              placeholder="Shorten a link here..."
              className="px-8 py-4 rounded-xl flex-1"
            />
            <ButtonForm text="Shorten It!" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
