import { z } from "zod";

export const stringValidation = (label: string) =>
  z
    .string()
    .min(2, `${label} is required and should be at least 2 characters.`);
