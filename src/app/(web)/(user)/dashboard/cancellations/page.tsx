import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CancellationsPage() {
  return (
    <DashboardLayout title="Returns & Cancellations">
      <div className="space-y-5">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-border-first bg-bg p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">
                  Modern Wooden Dining Table
                </h3>
                <p className="text-sm text-text-secondary">
                  Order ID: ORD-202600{item}
                </p>
                <p className="text-sm text-text-secondary">
                  Ordered on 18 Sept 2026
                </p>
              </div>

              <Badge variant="destructive">Cancelled</Badge>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-medium text-text-primary">Rs. 24,999</span>

              <Button variant="outline">View Refund</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
