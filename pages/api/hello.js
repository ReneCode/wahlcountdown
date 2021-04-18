// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { nanoid } from "nanoid";

export default (req, res) => {
  const id = nanoid();
  res.status(200).json({ name: "John Doe", id: id });
};
