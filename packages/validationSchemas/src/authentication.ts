import {z} from 'zod';

export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export type LoginInput = z.infer<typeof UserLoginSchema>;

export const UserSignupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phonenumber: z.number().min(10).max(10),
    password: z.string(),
});
export type SignupInput = z.infer<typeof UserSignupSchema>;