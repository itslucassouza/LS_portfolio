import { Header } from "./Header/Header";
import { NextPageButton } from "./NextPageButton/NextPageButton";

const headerOptions = [
  {
    label: "Home",
    value: "value",
  },
];

export function Welcome() {
  return (
    <div
      className="
          h-[100vh]
          flex 
          items-center
          p-9
          flex-col"
    >
      <Header options={headerOptions} logo="LStore" />

      <p className="text-[#00A3FF] font-bold max-sm:text-[33px] lg:text-[72px]">
        Lucas Souza
      </p>
      <p className="text-[#00A3FF] font-bold text-center max-sm:text-[44px] lg:text-[72px]">
        I am a Software Engineer
      </p>
      <span className="mx-auto text-center w-[70%]">
        4+ years of making the job done in the Tech industry! I am a
        product-oriented Software Engineer with a business mindset from bringing
        the latest tech to launching successful startups!
      </span>
      <NextPageButton />
    </div>
  );
}
