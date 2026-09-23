"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FormInput } from "@/src/components/form/form-input";
import { routes } from "@/src/lib/routes";
import { FacebookIcon, GoogleIcon } from "@/src/lib/icons";

type SignupForm = {
  fullName: string;
  email: string;
  password: string;
};

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  };

  return (
    <SpacingLayout className="flex  items-center justify-center py-16">
      <Card className="w-full max-w-md rounded-2xl border-border-first bg-bg shadow-none">
        <CardContent className="space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-text-primary">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              Create your account to start shopping furniture.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              name="fullName"
              label="Full Name"
              control={control}
              placeholder="Enter your full name"
              rules={{ required: "Full name is required." }}
              error={errors.fullName?.message}
            />
            <FormInput
              name="email"
              label="Email Address"
              control={control}
              type="email"
              placeholder="Enter your email"
              required
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address.",
                },
              }}
              error={errors.email?.message}
            />

            <FormInput
              name="password"
              label="Password"
              control={control}
              type="password"
              placeholder="Enter your password"
              required
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              }}
              error={errors.password?.message}
            />

            <Button type="submit" className="h-11 w-full">
              Sign Up
            </Button>
          </form>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-secondary">
              OR CONTINUE WITH
            </span>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="border-[var(--color-border-first)] bg-[var(--color-bg)] hover:bg-[var(--color-surface)] text-primary"
            >
              <GoogleIcon className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button
              variant="outline"
              className="border-[var(--color-border-first)] bg-[var(--color-bg)] hover:bg-[var(--color-surface)] text-primary"
            >
              <FacebookIcon className="mr-2 h-4 w-4 text-[#1877F2]" />
              Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link
              href={routes.signin}
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </SpacingLayout>
  );
}
