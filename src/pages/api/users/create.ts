import {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, username, password } = req.body;

  console.log("dados", email, username, password)
  await prisma.login.create({
    data: {
      userid: username,
      user_pass: password,
      email
    }
  })

  return res.status(201).json({})
}