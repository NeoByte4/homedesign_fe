import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

export default function AddressBookPage() {
  return (
    <DashboardLayout title="Address Book">
      <div className="rounded-xl border border-border-first bg-bg p-6">
        <h2 className="text-lg font-semibold">Saved Addresses</h2>
        <p className="mt-2 text-text-secondary">
          Manage your home and office delivery addresses.
        </p>
      </div>
    </DashboardLayout>
  );
}
