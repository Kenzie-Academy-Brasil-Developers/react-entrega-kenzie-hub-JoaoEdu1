import { z } from "zod";

export const addRegisterSchema = z.object({
  email: z.string().email().nonempty("O email é obrigatório"),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
      {
        message: "A senha não atende aos requisitos necessários.",
        params: {
          uppercase: "Deve conter pelo menos uma letra maiúscula.",
          lowercase: "Deve conter pelo menos uma letra minúscula.",
          number: "Deve conter pelo menos um número.",
          specialChar: "Deve conter pelo menos um caractere especial.",
          length: "Deve ter no mínimo 8 caracteres.",
        },
      }
    )
    .nonempty("A senha é obrigatória"),
  name: z.string().nonempty("O nome é obrigatório"),
  bio: z.string().nonempty("A bio é obrigatória"),
  contact: z.string().nonempty("O Contato é obrigatório"),
  course_module: z.string().nonempty("O módulo é obrigatório"),
});
