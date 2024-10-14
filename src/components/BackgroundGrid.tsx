import { ReactNode } from "react";

export default function BackgroundGrid({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="bg-grid-pattern">
        <div className="bg-black bg-opacity-80 min-h-screen">{children}</div>
      </div>
    </div>
  );
}
