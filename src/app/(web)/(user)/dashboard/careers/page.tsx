import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

export default function CareersPage() {
  return (
    <DashboardLayout title="Careers / Jobs">
      <div className="rounded-xl border border-border-first bg-bg p-6">
        <h2 className="text-lg font-semibold">Work With FurniHome</h2>

        <p className="mt-2 text-text-secondary">
          Apply for manufacturing, warehouse, delivery, or office jobs.
        </p>
      </div>
    </DashboardLayout>
  );
}
