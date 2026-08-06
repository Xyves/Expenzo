"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChildrenProps } from "../types";

export default function ModalPortalWrapper({ children }: ChildrenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}
