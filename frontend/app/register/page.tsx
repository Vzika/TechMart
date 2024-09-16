"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Eye, EyeOff, Facebook, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Navbar from '@/components/ui/custom/navbar';

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getPasswordStrength = (password: string) => {
    const strengthChecks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ];
    const strength = strengthChecks.filter(Boolean).length;
    if (strength < 2) return { label: "Weak", color: "bg-red-500" };
    if (strength < 4) return { label: "Moderate", color: "bg-yellow-500" };
    return { label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(password);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", data);

      if (response.status !== 200) {
        throw new Error("Failed to create account.");
      }

      // Handle success, e.g., redirect to login
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8 flex justify-center items-center min-h-screen'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Create an account
            </CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input
                  id='name'
                  placeholder='John Doe'
                  {...register("name", { required: "Full Name is required" })}
                />
                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john@example.com'
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    {...register("password", {
                      required: "Password is required",
                      minLength: 8,
                    })}
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff className='h-4 w-4 text-gray-500' />
                    ) : (
                      <Eye className='h-4 w-4 text-gray-500' />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <span className='text-red-500 text-sm'>
                    {errors.password.message ||
                      "Password must be at least 8 characters"}
                  </span>
                )}
              </div>
              {password && (
                <div className='space-y-2'>
                  <div className='text-sm'>
                    Password strength: {passwordStrength.label}
                  </div>
                  <div className='h-2 w-full bg-gray-200 rounded-full'>
                    <div
                      className={`h-full rounded-full ${passwordStrength.color}`}
                      style={{
                        width: `${passwordStrength.label === "Weak"
                          ? 33
                          : passwordStrength.label === "Moderate"
                            ? 66
                            : 100
                          }%`,
                      }}></div>
                  </div>
                </div>
              )}
              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirm your password'
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className='text-red-500 text-sm'>
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className='flex flex-col'>
              <Button className='w-full' type='submit' disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
              <div className='mt-4 text-center text-sm'>
                Already have an account?{" "}
                <Link href='/login' className='text-primary hover:underline'>
                  Log in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
