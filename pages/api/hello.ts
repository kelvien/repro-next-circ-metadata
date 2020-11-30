// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { User } from "entities/user"

export default (req, res) => {
  const user = new User();
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
