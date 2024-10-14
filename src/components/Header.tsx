import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import HeaderAnimation from "./HeaderAnimation";
import ShuffleTextContainer from "./ShuffleTextContainer";
import Logotype from "./Logotype";

export default function Header({ resumeLink }: { resumeLink: string }) {
  return (
    <header className="fixed w-full z-50">
      <div className="relative">
        <HeaderAnimation />
        <div className="px-[1.5vw] py-4 m-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-sm gap-4">
              <Link href="/">
                <Logotype width={48} height={48} />
              </Link>
              <ShuffleTextContainer
                firstText="welinsgg@gmail.com"
                secondText="welinsgg@gmail.com"
                shuffleIterations={15} // Настройте количество итераций
                displayDuration={5000} // Время отображения текста
              />
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={resumeLink}
                target="_blank"
                className="hidden sm:block bg-green-400 text-black px-6 py-1 rounded-md font-bold hover:bg-green-600 transition-all"
              >
                CV
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
