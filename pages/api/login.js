import { newUsers } from "@/services/Login";

export default async function handler(req, res) {
    const { users, password } = JSON.parse(req.body);

    await newUsers(users,password);

    res.status(200).json({ name: 'User Login' })
}