import Link from "next/link";
import { FaLinkedinIn, FaVk, FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import MagneticButton from "./MagneticButton";

export default function LinksContainer() {
  return (
    <div className="z-50 fixed bottom-0 w-full sm:w-auto sm:top-3/4">
      <div className="flex flex-row sm:flex-col items-center justify-center sm:items-start gap-2">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-1">
          <div className="w-[2vw] h-[1px] bg-purple-500" />
          <MagneticButton>
            <Link
              href="https://github.com/welins"
              target="_blank"
              className="p-2 block"
            >
              <PiGithubLogoBold className="w-6 h-6 group-hover:fill-purple-900 transition-all" />
            </Link>
          </MagneticButton>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-1">
          <div className="w-[2vw] h-[1px] bg-purple-500" />
          <MagneticButton>
            <Link
              href="https://linkedin.com/in/welins"
              target="_blank"
              className="p-2 block"
            >
              <FaLinkedinIn className="w-6 h-6 group-hover:fill-purple-900 transition-all" />
            </Link>
          </MagneticButton>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-1">
          <div className="w-[2vw] h-[1px] bg-purple-500" />
          <MagneticButton>
            <Link
              href="https://t.me/welins"
              target="_blank"
              className="p-2 block"
            >
              <FaTelegramPlane className="w-6 h-6 group-hover:fill-purple-900 transition-all" />
            </Link>
          </MagneticButton>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-1">
          <div className="w-[2vw] h-[1px] bg-purple-500" />
          <MagneticButton>
            <Link
              href="https://vk.com/welins"
              target="_blank"
              className="p-2 block"
            >
              <FaVk className="w-6 h-6 group-hover:fill-purple-900 transition-all" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
