import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCirclePlus } from "lucide-react";

export default function SupportPage() {
  return (
    <DashboardLayout title="Support Tickets">
      <div className="space-y-6">
        <div className="rounded-xl border border-border-first bg-bg p-5 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-text-primary">Need Help?</h2>

            <p className="text-sm text-text-secondary">
              Contact our customer support team for orders, returns, or delivery
              issues.
            </p>
          </div>

          <Button>
            <MessageCirclePlus className="mr-2 h-4 w-4" />
            New Ticket
          </Button>
        </div>

        {[1, 2].map((ticket) => (
          <div
            key={ticket}
            className="rounded-xl border border-border-first bg-bg p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">
                  Ticket #SUP-20260{ticket}
                </h3>

                <p className="text-sm text-text-secondary">
                  Product damaged during delivery.
                </p>
              </div>

              <Badge>Open</Badge>
            </div>

            <div className="mt-4 flex gap-3">
              <Button variant="outline">View Ticket</Button>
              <Button variant="outline">Reply</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
