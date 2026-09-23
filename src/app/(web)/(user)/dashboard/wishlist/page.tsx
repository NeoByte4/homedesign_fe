import DashboardLayout from "@/src/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  return (
    <DashboardLayout title="Wishlist">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-border-first bg-bg overflow-hidden"
          >
            <div className="h-52 bg-surface flex items-center justify-center">
              Furniture Image
            </div>

            <div className="space-y-3 p-4">
              <h3 className="font-semibold text-text-primary">
                Luxury Fabric Sofa
              </h3>

              <p className="text-sm text-text-secondary">
                Premium grey fabric sofa for living room.
              </p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary">Rs. 39,999</span>

                <Heart size={18} className="fill-current text-primary" />
              </div>

              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
