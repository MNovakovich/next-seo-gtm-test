"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { gtEvent } from "@/lib/gt";

type GTMButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    eventName: string;
    children?: React.ReactNode;
  };

export function GTMButton({ eventName, onClick, children, ...props }: GTMButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    window.dataLayer?.push({
      event: 'click_start_btn',
      label: 'Testiranje GTM dugmeta',
    });
  //  gtEvent.sharedSocialMedia({
  //   shared_social_media_platform: 'facebook_hepek',
  //   shared_social_media_url: 'https://www.facebook.com/share/1234567890',
  //  })
    onClick?.(e);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}

