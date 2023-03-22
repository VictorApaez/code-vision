export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex">
      <section className="bg-gray-100 border border-gray-300 p-4">
        This is the aside in dashboard
      </section>
      {children}
    </div>
  );
}
