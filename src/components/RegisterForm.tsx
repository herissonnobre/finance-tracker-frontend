"use client";

import {
  RegisterSchema,
  registerSchema,
} from "@/lib/validation/registerSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CPFInput } from "@/components/form/CPFInput";
import { CustomPhoneInput } from "@/components/form/PhoneInput";

export function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterSchema) => {
    setLoading(true);
    setMessage("");
    setIsError(false);

    const { confirmPassword, ...payload } = data;

    try {
      await api.post("/users", payload);

      setMessage("Conta criada com sucesso! Agora, faça login.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      const apiMessage =
        error.response?.data?.message || "Erro ao registrar. Tente novamente.";
      setIsError(true);
      setMessage(apiMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto w-full px-4"
    >
      <Input
        label="First Name"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <Input
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <CPFInput
        name="cpf"
        label="CPF"
        control={control}
        error={errors.cpf?.message}
      />

      <CustomPhoneInput
        name="phone"
        control={control}
        label="Phone"
        error={errors.phone?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      {message && (
        <div
          className={`text-sm p-2 rounded-md ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
        >
          {message}
        </div>
      )}

      <Button
        type="submit"
        className="mx-auto px-6 bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-medium py-2 rounded-full hover:shadow-light-1 dark:hover:shadow-dark-1 hover:opacity-[.8] focus:opacity-[.12] disabled:opacity-60 transition-colors duration-200"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
