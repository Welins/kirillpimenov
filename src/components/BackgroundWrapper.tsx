export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto px-4 lg:px-6">{children}</div>;
}
