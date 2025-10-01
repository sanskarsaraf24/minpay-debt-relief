import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(100),
  monthlyIncome: z.string().trim().min(1, "Please enter your monthly income"),
  totalLoanAmount: z.string().min(1, "Please select loan amount"),
  paymentStatus: z.string().min(1, "Please select payment status"),
});

type FormValues = z.infer<typeof formSchema>;

export const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      monthlyIncome: "",
      totalLoanAmount: "",
      paymentStatus: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    toast({
      title: "Consultation Booked!",
      description: "Our team will call you within 24 hours.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Consultation Booked!</h3>
        <p className="text-muted-foreground">
          Our team will call you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="monthlyIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Income</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 50000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="totalLoanAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Loan Amount</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan amount range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-2">₹1 - ₹2 Lakhs</SelectItem>
                  <SelectItem value="2-5">₹2 - ₹5 Lakhs</SelectItem>
                  <SelectItem value="5-10">₹5 - ₹10 Lakhs</SelectItem>
                  <SelectItem value="10+">₹10+ Lakhs</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your payment status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="current">Currently paying EMIs</SelectItem>
                  <SelectItem value="struggling">Struggling to pay</SelectItem>
                  <SelectItem value="missed">Missed payments</SelectItem>
                  <SelectItem value="defaulted">Defaulted</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="hero" size="lg" className="w-full">
          BOOK CONSULTATION WITH LAWYER
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          Our team will call you within 24 hours of booking the consultation.
        </p>
      </form>
    </Form>
  );
};