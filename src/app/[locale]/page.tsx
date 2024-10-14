import CustomParticles from "@/components/CustomParticles";
import NavigationMenu from "@/components/NavigationMenu";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import LinksContainer from "@/components/LinksContainer";
import Image from "next/image";
import TextOpacityAnimation from "@/components/TextOpacityAnimation";
import AnimateCursor from "@/components/AnimateCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ParallaxImages from "@/components/ParallaxImages/ParallaxImages";
import BackgroundGrid from "@/components/BackgroundGrid";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

interface Params {
  params: {
    locale: string;
  };
}

export default function HomePage() {
  const t = useTranslations();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <Header resumeLink={t("resumeLink")} />
      <BackgroundGrid>
        <BackgroundWrapper>
          <div className="flex flex-col text-center sm:text-left sm:flex-row items-center justify-center pt-24 sm:min-h-screen gap-4 lg:gap-8">
            <CustomParticles />
            <div className="space-y-3 z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase">
                {t("name")}
                <span className="block text-xl md:text-3xl lg:text-5xl text-purple-500">
                  {t("position")}
                </span>
              </h1>
              <div className="text-xl max-w-xl text-white">
                {t("information")}
              </div>
            </div>
            <div className="relative max-w-[300px] w-full h-[300px]">
              <div className="rounded-full drop-shadow-md relative w-full h-full overflow-hidden default-border bg-purple-400/5 shadow-md">
                <Image
                  src="/kp-avatar.png"
                  alt={`${t("name")}`}
                  width={300}
                  height={300}
                  quality={100}
                  className="absolute w-full h-full rounded-full pt-4 z-20 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </BackgroundWrapper>
        <div id="about">
          <BackgroundWrapper>
            <TextOpacityAnimation text={t("info.about_1")} />
          </BackgroundWrapper>
          <ParallaxImages />
          <BackgroundWrapper>
            <TextOpacityAnimation text={t("info.about_2")} />
          </BackgroundWrapper>
        </div>
        <BackgroundWrapper>
          <div className="sm:mx-[5vw] 2xl:mx-0">
            <Projects
              locales={{
                projects: t("navigation.work"),
                year: t("projects.year"),
                project: t("projects.project"),
                stack: t("projects.stack"),
                link: t("projects.link"),
              }}
            />
          </div>
          <div className="mt-24">
            <TextOpacityAnimation text={t("info.about_3")} />
          </div>
          <div className="sm:mx-[5vw]">
            <Contacts
              locales={{
                contacts: t("navigation.contacts"),
                heading: t("contacts.heading"),
                firstPart: t("contacts.firstPart"),
                highlightedPart: t("contacts.highlightedPart"),
                secondPart: t("contacts.secondPart"),
                buttonText: t("contacts.buttonText"),
                shufflePhone: t("contacts.shufflePhone"),
                shuffleEmail: t("contacts.shuffleEmail"),
                shuffleLocation1: t("contacts.shuffleLocation1"),
                shuffleLocation2: t("contacts.shuffleLocation2"),
                resumeLink: t("resumeLink"),
              }}
            />
          </div>
          <div className="w-full text-center py-12 sm:py-4">
            <span className="font-medium text-neutral-400 text-center text-sm">
              © {year} {t("rights")}
            </span>
          </div>
        </BackgroundWrapper>
        <SmoothScroll />
      </BackgroundGrid>
      <LinksContainer />
      <NavigationMenu
        locales={{
          info: t("navigation.info"),
          work: t("navigation.work"),
          contacts: t("navigation.contacts"),
        }}
      />
      <AnimateCursor />
    </>
  );
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: `${t("name")} — ${t("position")}`,
    description: `${t("name")} — ${t("position")} personal website`,
  };
}
