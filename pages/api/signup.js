import { createNewUser } from "@/services/SignUp";

export default async function handler(req, res) {
    const { firstName, lastName, email, password } = JSON.parse(req.body);

    await createNewUser(firstName,lastName,email,password);

    res.status(200).json({ name: 'User Created' })
}