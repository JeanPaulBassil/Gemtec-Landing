"use client";

import { SelectProps } from "@radix-ui/react-select";
import { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuoteSelectProps extends Omit<SelectProps, "children"> {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
}

export function QuoteSelect({
  placeholder,
  options,
  value,
  onValueChange,
  ...props
}: QuoteSelectProps) {
  return (
    <div className="relative">
      <Select value={value} onValueChange={onValueChange} {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          align="center"
          sideOffset={4}
          className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md"
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 