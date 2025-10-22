import { Request, Response } from "express";
import { parseNaturalLanguageQuery } from "../utils/naturalLanguageParser";
import { getAllStrings } from "../services/string.service.js";

/**
Natural Language Filtering
 */
export function naturalLanguageFilter(req: Request, res: Response) {
  const query = req.query.query as string;

  if (!query) {
    return res
      .status(400)
      .json({ error: `Unable to parse natural language query` });
  }

  try {
    const parsedFilters = parseNaturalLanguageQuery(query);
    const data = getAllStrings(parsedFilters);

    return res.status(200).json({
      data,
      count: data.length,
      interpreted_query: {
        original: query,
        parsed_filters: parsedFilters,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      if (err.message === "Unable to parse") {
        return res
          .status(400)
          .json({ error: "Unable to parse natural language query" });
      }
      return res
        .status(422)
        .json({ error: `Query parsed but resulted in conflicting filters` });
    }

    
    return res.status(500).json({ error: "Internal server error" });
  }
}
