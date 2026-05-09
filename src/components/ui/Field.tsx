import * as React from "react";

import { cn } from "@/lib/utils";

const baseControl =
  "w-full rounded-lg border border-[color:var(--color-pp-line)] bg-[color:var(--color-pp-white)] text-sm px-4 py-3 placeholder:text-[color:var(--color-pp-mute)] focus:outline-none focus:border-[color:var(--color-pp-tertiary)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-white)] disabled:opacity-50 disabled:pointer-events-none";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={cn("block text-sm font-medium", props.className)} />;
}

export function Hint(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn("text-[11px] text-[rgba(10,22,40,0.46)]", props.className)} />;
}

export function ErrorText(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn("text-[11px] text-[color:var(--color-pp-error)]", props.className)} />;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(baseControl, props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(baseControl, "bg-white", props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(baseControl, "px-4 py-2.5", props.className)} />;
}

export function Checkbox({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return <input type="checkbox" {...props} className={cn("mt-0.5 accent-[color:var(--color-pp-tertiary)]", className)} />;
}

