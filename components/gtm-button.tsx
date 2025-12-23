"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

type GTMButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    eventName: string;
    children?: React.ReactNode;
  };

export function GTMButton({ eventName, onClick, children, ...props }: GTMButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    window.dataLayer?.push({
      event: eventName,
      label: 'hej hepece sta radis'
    });
    onClick?.(e);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}

