import { z } from "zod";

export const addLoginSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("isso não é um e-mail"),
  password: z.string().nonempty("A senha é obrigatória"),
});
