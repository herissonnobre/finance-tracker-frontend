"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Solicitação de recuperação enviada para:", email);
    // Chamada à API de solicitação de redefinição de senha
  };

  return (
    <div className="w-full rounded-2xl p-8 bg-light-surface-container-low dark:bg-dark-surface-container-low shadow-light-1">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full px-4"
      >
        <Input
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button
          type="submit"
          className="w-full px-6 bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary font-medium py-2 rounded-full hover:shadow-light-1 dark:hover:shadow-dark-1 hover:opacity-[.8] focus:opacity-[.12] disabled:opacity-60 transition-colors duration-200"
        >
          Enviar link de recuperação
        </Button>
      </form>
    </div>
  );
}
