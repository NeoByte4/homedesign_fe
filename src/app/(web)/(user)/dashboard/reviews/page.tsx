import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  return (
    <DashboardLayout title="My Reviews">
      <div className="space-y-5">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-border-first bg-bg p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">
                  Modern Queen Bed
                </h3>

                <p className="text-sm text-text-secondary">
                  Reviewed on 15 Sept 2026
                </p>
              </div>

              <div className="flex items-center gap-1 text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-current" />
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm text-text-secondary">
              Excellent quality furniture. Easy to assemble and looks premium.
            </p>

            <div className="mt-4 flex gap-3">
              <Button variant="outline">Edit Review</Button>
              <Button variant="outline">Delete Review</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
