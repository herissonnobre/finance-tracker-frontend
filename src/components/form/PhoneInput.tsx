"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Control, useController } from "react-hook-form";

interface CustomPhoneInputProps {
  name: string;
  control: Control<any>;
  label: string;
  error?: string;
}

export function CustomPhoneInput({
  name,
  control,
  label,
  error,
}: CustomPhoneInputProps) {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <PhoneInput
        country={"br"}
        value={value}
        onChange={onChange}
        inputProps={{
          name,
          required: true,
          className: "w-full h-10 px-3 py-2 text-sm border rounded-md",
        }}
        containerClass="w-full"
        inputStyle={{
          width: "100%",
          height: "40px",
          borderRadius: "0.375rem",
          border: "1px solid #d1d5db",
          paddingLeft: "48px",
        }}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
