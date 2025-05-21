"use client";

import { Input } from "@/components/ui/input";
import { Control, useController } from "react-hook-form";
import { formatCPF } from "@/lib/masks";

interface CPFInputProps {
  name: string;
  label: string;
  control: Control<any>;
  error?: string;
}

export function CPFInput({ name, label, control, error }: CPFInputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({ name, control });

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "").slice(0, 11);
    const formattedValue = formatCPF(rawValue);
    onChange(formattedValue);
  };

  return (
    <Input
      label={label}
      value={value}
      onChange={handleCPFChange}
      onBlur={onBlur}
      ref={ref}
      error={error}
    />
  );
}
