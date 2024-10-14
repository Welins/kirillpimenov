"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher() {
  const locale = useLocale(); // Получаем текущую локаль
  return (
    <div className="default-border text-sm flex items-center justify-between gap-1 rounded-md bg-gradient-to-tr from-[#000010] to-[#000000] shadow-xl p-1 py-[6px]">
      <div className="text-center cursor-pointer">
        {locale === "en" ? (
          <span className="bg-white/10 rounded-sm  rounded-r-none px-2 sm:px-6 py-1">
            EN
          </span>
        ) : (
          <Link
            href="/en"
            locale="en"
            className="bg-black/50 hover:bg-white/10 transition-all rounded-sm rounded-r-none px-2 sm:px-6 py-1"
          >
            EN
          </Link>
        )}
      </div>
      <div className="text-center cursor-pointer">
        {locale === "ru" ? (
          <span className="bg-white/10 rounded-sm rounded-l-none px-2 sm:px-6 py-1 ">
            RU
          </span>
        ) : (
          <Link
            href="/ru"
            locale="ru"
            className="bg-black/50 hover:bg-white/10 transition-all rounded-sm rounded-l-none px-2 sm:px-6 py-1"
          >
            RU
          </Link>
        )}
      </div>
    </div>
  );
}
