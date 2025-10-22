import { StringModel } from "../models/string.model.js";
import { analyzeString } from "../utils/stringAnalyzer.js";

const store = new Map<string, StringModel>();

export function addString(value: string): StringModel | null {
  const properties = analyzeString(value);

  if (store.has(properties.sha256_hash)) {
    return null; // Already exists
  }

  const entry: StringModel = {
    id: properties.sha256_hash,
    value,
    properties,
    created_at: new Date().toISOString(),
  };

  store.set(entry.id, entry);
  return entry;
}

export function getString(value: string): StringModel | null {
  const hash = analyzeString(value).sha256_hash;
  return store.get(hash) ?? null;
}

export function getAllStrings(
  filters: Record<string, any> = {}
): StringModel[] {
  return Array.from(store.values()).filter((entry) => {
    const p = entry.properties;

    if (
      filters.is_palindrome !== undefined &&
      p.is_palindrome !== (filters.is_palindrome === "true")
    )
      return false;
    if (filters.min_length && p.length < parseInt(filters.min_length))
      return false;
    if (filters.max_length && p.length > parseInt(filters.max_length))
      return false;
    if (filters.word_count && p.word_count !== parseInt(filters.word_count))
      return false;
    if (
      filters.contains_character &&
      !entry.value.includes(filters.contains_character)
    )
      return false;

    return true;
  });
}

export function deleteString(value: string): boolean {
  const hash = analyzeString(value).sha256_hash;
  return store.delete(hash);
}
