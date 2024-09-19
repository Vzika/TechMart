"use client";

import { useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterParams = {
  status?: string;
  startDate?: string;
  endDate?: string;
};

export function FilterForm({
  initialFilters,
}: {
  initialFilters: FilterParams;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [filters, setFilters] = useState<FilterParams>(initialFilters);

  const handleFilterChange = (key: keyof FilterParams, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.append(key, value);
    });
    startTransition(() => {
      router.push(`${pathname}?${searchParams.toString()}`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <div className='flex-1 min-w-[200px]'>
          <Label htmlFor='status'>Status</Label>
          <Select
            value={filters.status || ""}
            onValueChange={(value) => handleFilterChange("status", value)}>
            <SelectTrigger id='status'>
              <SelectValue placeholder='Select status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='_'>All</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='processing'>Processing</SelectItem>
              <SelectItem value='shipped'>Shipped</SelectItem>
              <SelectItem value='delivered'>Delivered</SelectItem>
              <SelectItem value='cancelled'>Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex-1 min-w-[200px]'>
          <Label htmlFor='startDate'>Start Date</Label>
          <Input
            type='date'
            id='startDate'
            value={filters.startDate || ""}
            onChange={(e) => handleFilterChange("startDate", e.target.value)}
          />
        </div>
        <div className='flex-1 min-w-[200px]'>
          <Label htmlFor='endDate'>End Date</Label>
          <Input
            type='date'
            id='endDate'
            value={filters.endDate || ""}
            onChange={(e) => handleFilterChange("endDate", e.target.value)}
          />
        </div>
      </div>
      <Button type='submit' disabled={isPending}>
        {isPending ? "Filtering..." : "Apply Filters"}
      </Button>
    </form>
  );
}
