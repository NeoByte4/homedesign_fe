import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

export default function PaymentPage() {
  return (
    <DashboardLayout title="Payment Methods">
      <div className="rounded-xl border border-border-first bg-bg p-6">
        <h2 className="text-lg font-semibold">Payment Methods</h2>
        <p className="mt-2 text-text-secondary">
          Save your cards, eSewa, Khalti, and other payment methods.
        </p>
      </div>
    </DashboardLayout>
  );
}
