import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

export default function ProfilePage() {
  return (
    <DashboardLayout title="My Profile">
      <div className="rounded-xl border border-border-first bg-bg p-6">
        <h2 className="text-lg font-semibold">Personal Information</h2>

        <p className="mt-2 text-sm text-text-secondary">
          Customer profile information.
        </p>
      </div>
    </DashboardLayout>
  );
}
