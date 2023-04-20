import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
//
import { articleData } from "@/data/articleData1";

export type article = {
  id: number;
  title: string;
  excerpt: string;
  body: string;
}
type resType = article[]

export default function handler(req: Req, res: Res<resType>) {
  res.status(200).json(articleData);
}