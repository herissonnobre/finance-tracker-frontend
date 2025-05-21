"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setErrorMessage("");

    try {
      await api.post("/auth/login", data);
      router.push("/dashboard");
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message || "Error while logging in. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md w-full"
    >
      <Input
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        {...register("email", { required: "Informe o e-mail" })}
        error={errors.email?.message}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="*********"
        {...register("password", { required: "Informe a senha" })}
        error={errors.password?.message}
      />

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

      <Button
        type="submit"
        disabled={loading}
        className="mx-auto px-6 bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-medium py-2 rounded-full hover:shadow-light-1 dark:hover:shadow-dark-1 hover:opacity-[.8] focus:opacity-[.12] disabled:opacity-60 transition-colors duration-200"
      >
        {loading ? "Entrando..." : "Entrar"}
      </Button>

      <div className="flex justify-between text-sm">
        <Link href="/forgot-password" className="text-primary hover:underline">
          Esqueci minha senha
        </Link>
        <Link href="/register" className="text-primary hover:underline">
          Criar conta
        </Link>
      </div>
    </form>
  );
}
