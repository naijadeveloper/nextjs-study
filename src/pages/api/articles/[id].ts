import { NextApiRequest as Req, NextApiResponse as Res } from "next";
//
import { articleData } from "@/data/articleData1";

import type { article } from ".";

export default function handler(req: Req, res: Res<article | {message: string}>) {
  const {id} = req.query;
  const filter = articleData.filter(article => article.id === Number(id));

  if(filter.length > 0) {
    res.status(200).json(filter[0]);
  }else {
    res.status(404).json({message: `Article of the id ${id} is not found`});
  }
}