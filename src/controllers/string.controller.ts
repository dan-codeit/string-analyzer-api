import { Request, Response } from "express";
import {
  addString,
  getAllStrings,
  getString,
  deleteString,
} from "../services/string.service";

export function createString(req: Request, res: Response) {
  const { value } = req.body;

  if (!value) return res
    .status(400)
    .json({ error: `Invalid request body or missing "value" field` });
  if (typeof value !== "string")
    return res
      .status(422)
      .json({ error: `Invalid data type for "value" (must be string)` });

  const result = addString(value);
  if (!result) return res.status(409).json({ error: "String already exists in the system" });

  return res.status(201).json(result);
}

// get a single string
export function getSingleString(req: Request, res: Response) {
  const { string_value } = req.params;
  const result = getString(string_value);

  if (!result) return res.status(404).json({ error: "String does not exist in the system" });
  return res.status(200).json(result);
}

// filter string
export function getFilteredStrings(req: Request, res: Response) {
  const filters = req.query;
  const data = getAllStrings(filters);

  res.status(200).json({
    data,
    count: data.length,
    filters_applied: filters,
  });
}

// delete string
export function deleteStringHandler(req: Request, res: Response) {
  const { string_value } = req.params;
  const success = deleteString(string_value);

  if (!success) return res.status(404).json({ error: "String does not exist in the system" });
  return res.status(204).send();
}
