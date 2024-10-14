import Link from "next/link";
import ShuffleTextContainer from "./ShuffleTextContainer";

interface ContactsProps {
  locales: {
    contacts: string;
    heading: string;
    firstPart: string;
    highlightedPart: string;
    secondPart: string;
    buttonText: string;
    shufflePhone: string;
    shuffleEmail: string;
    shuffleLocation1: string;
    shuffleLocation2: string;
    resumeLink: string;
  };
}

export default function Contacts({ locales }: ContactsProps) {
  return (
    <div
      id="contact"
      className="mt-20 mb-5 sm:mb-30 md:mb-40 w-full py-10 sm:py-20 md:py-40 bg-purple-500/5 drop-shadow-2xl border-[2px] border-purple-500/10 rounded-md"
    >
      <div className="max-w-xl m-auto text-center px-2">
        <span className="inline-block text-purple-400 uppercase tracking-widest text-sm font-bold my-2">
          {locales.contacts}
        </span>
        <h3 className="font-bold text-3xl sm:text-5xl uppercase mb-5">
          {locales.heading}
        </h3>
        <p className="mb-5 font-medium text-lg">
          {locales.firstPart}{" "}
          <span className="text-purple-400">{locales.highlightedPart}</span>{" "}
          {locales.secondPart}
        </p>
        <div className="flex justify-center items-center gap-4 font-medium mb-1 tracking-widest">
          <div className="uppercase font-bold text-purple-400 text-sm">
            <ShuffleTextContainer
              firstText={locales.shufflePhone}
              secondText={locales.shuffleEmail}
              displayDuration={5000}
              shuffleIterations={7}
            />
          </div>
          <div className="fond-medium">
            <ShuffleTextContainer
              firstText="+7 (904) 231-04-64"
              secondText="welinsgg@gmail.com"
              displayDuration={5000}
              shuffleIterations={7}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 font-medium mb-10 tracking-widest">
          <div className="uppercase font-bold text-neutral-400 text-sm">
            <ShuffleTextContainer
              firstText={locales.shuffleLocation1}
              secondText={locales.shuffleLocation2}
              displayDuration={2000}
              shuffleIterations={10}
              inline={false}
            />
          </div>
        </div>
        <button className="relative overflow-hidden capitalize rounded-md bg-purple-400 hover:bg-purple-600 transition-all">
          <Link
            className="inline-block relative px-10 py-2 font-bold text-black bg-transparent rounded-md"
            href={locales.resumeLink}
            target="_blank"
          >
            {locales.buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
}
