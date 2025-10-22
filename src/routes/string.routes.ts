import { Router } from "express";
import {
  createString,
  getSingleString,
  getFilteredStrings,
  deleteStringHandler,
} from "../controllers/string.controller";
import { naturalLanguageFilter } from "../controllers/naturalLanguageFilter.controller";

const router = Router();

router.post("/", createString);
router.get("/", getFilteredStrings);
router.get("/filter-by-natural-language", naturalLanguageFilter); 
router.get("/:string_value", getSingleString);
router.delete("/:string_value", deleteStringHandler);

export default router;
