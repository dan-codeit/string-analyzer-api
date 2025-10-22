export interface StringProperties {
  length: number;
  is_palindrome: boolean;
  unique_characters: number;
  word_count: number;
  sha256_hash: string;
  character_frequency_map: Record<string, number>;
}

export interface StringModel {
  id: string;
  value: string;
  properties: StringProperties;
  created_at: string;
}
