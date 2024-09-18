import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PenIcon, Trash2Icon, EyeIcon } from "lucide-react";
import { FilterForm } from "./filter-form";
import Navbar from "@/components/ui/custom/navbar";

type Order = {
  id: string;
  customerName: string;
  orderDate: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
};

type FilterParams = {
  status?: Order["status"];
  startDate?: string;
  endDate?: string;
};

async function getOrders(filters: FilterParams): Promise<Order[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const allOrders = [
    {
      id: "1",
      customerName: "John Doe",
      orderDate: "2023-04-01",
      total: 99.99,
      status: "shipped",
    },
    {
      id: "2",
      customerName: "Jane Smith",
      orderDate: "2023-04-02",
      total: 149.99,
      status: "processing",
    },
    {
      id: "3",
      customerName: "Bob Johnson",
      orderDate: "2023-04-03",
      total: 199.99,
      status: "delivered",
    },
    {
      id: "4",
      customerName: "Alice Brown",
      orderDate: "2023-04-04",
      total: 79.99,
      status: "pending",
    },
    {
      id: "5",
      customerName: "Charlie Wilson",
      orderDate: "2023-04-05",
      total: 299.99,
      status: "cancelled",
    },
  ] as Order[];

  return allOrders.filter((order) => {
    if (filters.status && order.status !== filters.status) return false;
    if (
      filters.startDate &&
      new Date(order.orderDate) < new Date(filters.startDate)
    )
      return false;
    if (
      filters.endDate &&
      new Date(order.orderDate) > new Date(filters.endDate)
    )
      return false;
    return true;
  });
}

function StatusBadge({ status }: { status: Order["status"] }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <Badge className={`${statusStyles[status]} capitalize`}>{status}</Badge>
  );
}

function OrderActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <EyeIcon className='mr-2 h-4 w-4' />
          View details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PenIcon className='mr-2 h-4 w-4' />
          Edit order
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-red-600'>
          <Trash2Icon className='mr-2 h-4 w-4' />
          Delete order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filters: FilterParams = {
    status: searchParams.status as Order["status"],
    startDate: searchParams.startDate as string,
    endDate: searchParams.endDate as string,
  };

  const orders = await getOrders(filters);

  return (
    <>
      <Navbar />
      <div className='container mx-auto py-10'>
        <Card className='shadow-lg'>
          <CardHeader className='bg-gray-50'>
            <CardTitle className='text-2xl font-bold text-gray-800'>
              Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FilterForm initialFilters={filters} />
            <div className='overflow-x-auto mt-6'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Order ID</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className='hover:bg-gray-50'>
                      <TableCell className='font-medium'>{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>
                        {new Date(order.orderDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <StatusBadge status={order.status} />
                      </TableCell>
                      <TableCell className='text-right'>
                        <OrderActions />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
