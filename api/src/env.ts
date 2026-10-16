export const PORT = Number(process.env.PORT ?? 3000)

export const NEO4J_URI = process.env.NEO4J_URI ?? 'bolt://localhost:7687'
export const NEO4J_USER = process.env.NEO4J_USER ?? 'neo4j'
export const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD ?? 'devpassword'

export const KURRENTDB_URI = process.env.KURRENTDB_URI ?? 'kurrentdb://localhost:2113?tls=false'
export const WORLD_DIR = process.env.WORLD_DIR ?? '../worlds'
export const RECENT_TURN_COUNT = Number(process.env.RECENT_TURN_COUNT ?? 3)

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY
export const GEMINI_MODEL = process.env.GEMINI_MODEL ?? 'gemini-3.8-flash'
