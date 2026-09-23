"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import SpacingLayout from "@/src/components/layouts/spacing-layout";
import { FormInput } from "@/src/components/form/form-input";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/src/lib/routes";
import { FacebookIcon, GoogleIcon } from "@/src/lib/icons";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <SpacingLayout
      id="login"
      className="flex  items-center justify-center py-16"
    >
      <Card className="w-full max-w-md rounded-2xl border-border-first bg-bg shadow-none">
        <CardContent className="space-y-6 p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold text-text-primary">
              Welcome Back
            </h1>
            <p className="text-sm text-text-secondary">
              Login to your account to continue shopping.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              }}
              error={errors.password?.message}
            />
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="h-11 w-full">
              Login
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
            Don`t have an account?
            <Link
              href={routes.signup}
              className="font-medium text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </SpacingLayout>
  );
}
