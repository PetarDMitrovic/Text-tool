export interface EntityExtraction {
  annotations: Annotation[]
}

export interface Annotation {
  spot: string,
  categories: string[],
  abstract: string,
  image: Image
}

export interface Image {
  full: string,
  thumbnail: string
}

export interface History {
  historydata: HistoryData[]
}

export interface HistoryData {
  date:Date,
  type: string,
  url: string
}

export interface Similarity {
  similarity: number
}

export interface LanguageDetecting {
  detectedLangs: Language[]
}

export interface Language {
  lang: string,
  confidence: number
}

export interface SentimentAnalysis {
  sentiment: Sentiment;
}

export interface Sentiment {
  score: number,
  type: string
}
