import crypto from "crypto";
import { StringProperties } from "../models/string.model.js";

export function analyzeString(value: string): StringProperties {
  const normalized = value.toLowerCase().replace(/\s+/g, "");
  const isPalindrome = normalized === [...normalized].reverse().join("");
  const uniqueChars = new Set(value).size;
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  const hash = crypto.createHash("sha256").update(value).digest("hex");

  const freqMap: Record<string, number> = {};
  for (const char of value) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  return {
    length: value.length,
    is_palindrome: isPalindrome,
    unique_characters: uniqueChars,
    word_count: wordCount,
    sha256_hash: hash,
    character_frequency_map: freqMap,
  };
}
