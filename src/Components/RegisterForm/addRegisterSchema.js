import { z } from "zod";

export const addRegisterSchema = z
  .object({
    email: z.string().email().nonempty("O email é obrigatório"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .regex(/^(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula.")
      .regex(/^(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula.")
      .regex(/^(?=.*\d)/, "Deve conter pelo menos um número.")
      .regex(
        /^(?=.*[!@#$%^&*()])/,
        "Deve conter pelo menos um caractere especial."
      )
      .min(8, "Deve ter no mínimo 8 caracteres."),
    confirm: z.string().nonempty("Confirmar a senha é obrigatório."),
    name: z.string().nonempty("O nome é obrigatório"),
    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z.string().nonempty("O Contato é obrigatório"),
    course_module: z.string().nonempty("O módulo é obrigatório"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem.",
    path: ["confirm"],
  });
