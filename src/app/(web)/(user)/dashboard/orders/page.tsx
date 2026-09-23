import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

export default function OrdersPage() {
  return (
    <DashboardLayout title="My Orders">
      <div className="rounded-xl border border-border-first bg-bg p-6">
        <h2 className="text-lg font-semibold">My Orders</h2>
        <p className="mt-2 text-text-secondary">
          Track all your furniture orders.
        </p>
      </div>
    </DashboardLayout>
  );
}
