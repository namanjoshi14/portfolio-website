"use client";

import React from "react";
import { toast } from "sonner";
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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandLinkedin,
  IconBrandGmail,
  IconMail,
} from "@tabler/icons-react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const typewriterWords = [{ text: "Get In Touch", className: "text-primary" }];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15),
  email: z.string().email({ message: "Invalid email address." }),
  linkedin: z.string().url({ message: "Invalid LinkedIn profile URL." }),
  feedback: z
    .string()
    .min(10, { message: "Feedback must be at least 10 characters." }),
});

export default function ContactMe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      feedback: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Submission failed. Please try again later.");
      }

      await response.json();
      // Professional confirmation message with a subtle call-to-action.
      toast(
        "Thank you for contacting us. Your inquiry has been received, and our team will respond promptly."
      );
      form.reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred. Please try again.";
      toast(errorMessage);
    }
  }

  const dockLinks = [
    {
      title: "Outlook",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:namanjoshi.kr@outlook.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/maniac2356/",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:namanjoshi.kr@gmail.com",
    },
  ];

  return (
    <>
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <TypewriterEffectSmooth words={typewriterWords} />
        </div>
        <Tabs defaultValue="info" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-6 flex gap-10 w-[400px]">
              <TabsTrigger value="info">My Contact Info.</TabsTrigger>
              <TabsTrigger value="form">Book A Call</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="info" className="space-y-4">
            <div className="space-y-2">
              <p className="text-xl font-bold">NAMAN JOSHI</p>
              <p className="font-medium">
                SPECIALIST PROGRAMMER AT INFOSYS LIMITED
              </p>
              <p>+917895394519</p>
              <p>namanjoshi.kr@outlook.com</p>
            </div>
            <div className="mt-8">
              <FloatingDock
                mobileClassName="translate-y-20"
                items={dockLinks}
              />
            </div>
          </TabsContent>

          <TabsContent value="form">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8901" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://linkedin.com/in/username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback / Comments</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message or comments here..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center">
                  <Button type="submit" className="w-full md:w-auto">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
