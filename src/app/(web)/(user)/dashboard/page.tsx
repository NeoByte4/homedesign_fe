import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  User,
  MapPin,
  ShoppingBag,
  CreditCard,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout title="Manage My Account">
      <div className="space-y-6">
        {/* Welcome Section */}
        <Card className="border-border-first bg-bg shadow-none">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-text-secondary">Welcome back 👋</p>

              <h2 className="mt-1 text-2xl font-semibold text-text-primary">
                Jiban Pandey
              </h2>

              <p className="mt-2 text-sm text-text-secondary">
                Manage your profile, addresses, orders, payments, and account
                settings.
              </p>
            </div>

            <Button variant="outline" className="text-primary">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Personal Profile */}
          <Card className="border-border-first bg-bg shadow-none">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-text-primary">
                    Personal Profile
                  </h3>
                </div>

                <Button variant="outline" className="text-primary" size="sm">
                  Edit
                </Button>
              </div>

              <div className="space-y-2 text-sm">
                <p className="font-medium text-text-primary">Jiban Pandey</p>

                <p className="text-text-secondary">jiban@email.com</p>

                <p className="text-text-secondary">+977 9812345678</p>
              </div>

              <Button
                variant="outline"
                className="w-full justify-between text-primary"
              >
                View Profile
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Address Book */}
          <Card className="border-border-first bg-bg shadow-none">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-text-primary">
                    Address Book
                  </h3>
                </div>

                <Button variant="outline" className="text-primary" size="sm">
                  Add
                </Button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="rounded-lg bg-surface p-3">
                  <p className="font-medium text-text-primary">Home Address</p>

                  <p className="text-text-secondary">
                    Lokanthali, Madhyapur Thimi
                  </p>

                  <p className="text-text-secondary">Bhaktapur, Bagmati</p>
                </div>

                <div className="rounded-lg bg-surface p-3">
                  <p className="font-medium text-text-primary">
                    Office Address
                  </p>

                  <p className="text-text-secondary">Putalisadak, Kathmandu</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full justify-between text-primary"
              >
                Manage Addresses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* My Orders */}
          <Card className="border-border-first bg-bg shadow-none">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-primary" />

                <h3 className="font-semibold text-text-primary">My Orders</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-surface p-4 text-center">
                  <p className="text-2xl font-bold text-primary">5</p>

                  <p className="text-xs text-text-secondary">Total Orders</p>
                </div>

                <div className="rounded-lg bg-surface p-4 text-center">
                  <p className="text-2xl font-bold text-primary">2</p>

                  <p className="text-xs text-text-secondary">Delivered</p>
                </div>

                <div className="rounded-lg bg-surface p-4 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>

                  <p className="text-xs text-text-secondary">Pending</p>
                </div>

                <div className="rounded-lg bg-surface p-4 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>

                  <p className="text-xs text-text-secondary">Cancelled</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full justify-between text-primary"
              >
                View Orders
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="border-border-first bg-bg shadow-none">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-primary" />

                <h3 className="font-semibold text-text-primary">
                  Payment Methods
                </h3>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg border border-border-first p-3">
                  <p className="font-medium text-text-primary">
                    Visa Ending •••• 1234
                  </p>

                  <p className="text-xs text-text-secondary">
                    Default Payment Method
                  </p>
                </div>

                <div className="rounded-lg border border-border-first p-3">
                  <p className="font-medium text-text-primary">eSewa Wallet</p>

                  <p className="text-xs text-text-secondary">Connected</p>
                </div>

                <div className="rounded-lg border border-border-first p-3">
                  <p className="font-medium text-text-primary">Khalti Wallet</p>

                  <p className="text-xs text-text-secondary">Connected</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full justify-between text-primary"
              >
                Manage Payments
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
