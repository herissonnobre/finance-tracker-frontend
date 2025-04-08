"use client";

import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
}
