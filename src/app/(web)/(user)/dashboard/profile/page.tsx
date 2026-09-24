"use client";

import dynamic from "next/dynamic";

import DashboardLayout from "@/src/components/dashboard/dashboard-layout";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Calendar,
  Navigation,
} from "lucide-react";
import { userData } from "@/src/data/user-data";

const MapWidget = dynamic(
  () =>
    import("@/src/components/map/map-widget").then(
      (module) => module.MapWidget,
    ),
  { ssr: false },
);

export default function ProfilePage() {
  const customer = userData.find((user) => user.role === "customer");

  if (!customer) return null;

  const address = customer.addresses?.find((addr) => addr.is_default);

  return (
    <DashboardLayout title="My Profile">
      <div className="space-y-6">
        {/* Profile Header */}
        <Card className="border-border-first bg-bg shadow-none">
          <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              {/* Avatar with First Letter */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border-first bg-surface">
                <span className="text-4xl font-bold text-primary">
                  {customer.first_name.charAt(0).toUpperCase()}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-text-primary">
                  {customer.first_name} {customer.last_name}
                </h2>

                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-on-primary capitalize">
                    {customer.role}
                  </Badge>

                  <Badge variant="outline" className="capitalize">
                    {customer.status}
                  </Badge>
                </div>

                <p className="text-sm text-text-secondary">
                  Member since{" "}
                  {new Date(customer.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <Button>Edit Profile</Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="border-border-first bg-bg shadow-none">
          <CardContent className="space-y-5 p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Personal Information
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <User className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">Full Name</p>
                  <p className="font-medium text-text-primary">
                    {customer.first_name} {customer.last_name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">Email Address</p>
                  <p className="font-medium text-text-primary">
                    {customer.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">Phone Number</p>
                  <p className="font-medium text-text-primary">
                    +977 {customer.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">
                    Account Verification
                  </p>

                  <div className="mt-1 flex flex-wrap gap-2">
                    {customer.is_email_verified && (
                      <Badge variant="outline">Email Verified</Badge>
                    )}
                    {customer.is_phone_verified && (
                      <Badge variant="outline">Phone Verified</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Default Address */}
        <Card className="border-border-first bg-bg shadow-none">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Default Delivery Address
                </h3>
                <p className="text-sm text-text-secondary">
                  Your primary delivery location for furniture orders.
                </p>
              </div>

              <Button variant="outline">Manage Address</Button>
            </div>

            {address && (
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left : Leaflet Map */}
                <div className="overflow-hidden rounded-xl border border-border-first">
                  <MapWidget
                    fill
                    points={[
                      {
                        name: "Home Address",
                        address: `${address.street_address}, ${address.city}, ${address.district}, ${address.province}, Nepal`,
                        // Pass coordinates so the map centers correctly
                        latitude: address.latitude,
                        longitude: address.longitude,
                      },
                    ]}
                  />
                </div>

                {/* Right : Address Details */}
                <div className="rounded-xl bg-surface p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />

                    <p className="font-semibold text-text-primary">
                      {address.full_name}
                    </p>

                    {address.is_default && (
                      <Badge variant="outline">Default</Badge>
                    )}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs text-text-secondary">
                        Phone Number
                      </p>
                      <p className="font-medium text-text-primary">
                        +977 {address.phone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">
                        Street Address
                      </p>
                      <p className="font-medium text-text-primary">
                        {address.street_address}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">City / Ward</p>
                      <p className="font-medium text-text-primary">
                        Ward {address.ward_no}, {address.city}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">
                        District / Province
                      </p>
                      <p className="font-medium text-text-primary">
                        {address.district}, {address.province}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">Postal Code</p>
                      <p className="font-medium text-text-primary">
                        {address.postal_code ?? "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">Landmark</p>
                      <p className="font-medium text-text-primary">
                        {address.landmark ?? "—"}
                      </p>
                    </div>

                    {/* Coordinates */}
                    <div className="flex items-start gap-2 pt-1">
                      <Navigation className="mt-1 h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-text-secondary">
                          Coordinates
                        </p>
                        <p className="font-mono text-xs font-medium text-text-primary">
                          {address.latitude ?? "—"}, {address.longitude ?? "—"}
                        </p>
                      </div>
                    </div>

                    <Button className="mt-4 w-full">
                      Edit Default Address
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card className="border-border-first bg-bg shadow-none">
          <CardContent className="space-y-5 p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Account Information
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">Account Created</p>

                  <p className="font-medium text-text-primary">
                    {new Date(customer.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs text-text-secondary">Last Login</p>

                  <p className="font-medium text-text-primary">
                    {customer.last_login_at
                      ? new Date(customer.last_login_at).toLocaleString()
                      : "—"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-text-secondary">Authentication</p>

                <Badge variant="outline" className="mt-2 capitalize">
                  {customer.auth_provider}
                </Badge>
              </div>

              <div>
                <p className="text-xs text-text-secondary">Account Status</p>

                <Badge className="mt-2 bg-primary text-on-primary capitalize">
                  {customer.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
