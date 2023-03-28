import Aside from "./Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex">
      <Aside />
      {children}
    </div>
  );
}
