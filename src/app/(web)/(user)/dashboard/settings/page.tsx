import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <DashboardLayout title="Account Settings">
      <div className="space-y-6">
        {/* Password */}
        <div className="rounded-xl border border-border-first bg-bg p-6">
          <h3 className="font-semibold text-text-primary">Change Password</h3>

          <p className="mt-1 text-sm text-text-secondary">
            Update your account password.
          </p>

          <Button className="mt-5">Change Password</Button>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border-first bg-bg p-6 space-y-5">
          <h3 className="font-semibold text-text-primary">
            Notification Preferences
          </h3>

          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label>SMS Notifications</Label>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <Label>Order Updates</Label>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label>Promotional Offers</Label>
            <Switch />
          </div>
        </div>

        {/* Delete */}
        <div className="rounded-xl border border-border-first bg-bg p-6">
          <h3 className="font-semibold text-red-600">Delete Account</h3>

          <p className="mt-2 text-sm text-text-secondary">
            Permanently delete your FurniHome account and all saved data.
          </p>

          <Button variant="destructive" className="mt-5">
            Delete My Account
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
