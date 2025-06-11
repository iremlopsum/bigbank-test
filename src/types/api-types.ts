export interface GameResponse {
  gold: number
  turn: number
  lives: number
  level: number
  score: number
  gameId: string
  highScore: number
}

export interface ReputationResponse {
  state: number
  people: number
  underworld: number
}

export interface Message {
  adId: string
  reward: number
  message: string
  expiresIn: number
  probability: string
  encrypted: 1 | 2 | null
}

export type MessageListResponse = Message[]

export interface SolveResponse {
  gold: number
  turn: number
  lives: number
  score: number
  message: string
  success: boolean
  highScore: number
}

export interface ShopItem {
  id: string
  name: string
  cost: number
}

export type ShopItemsResponse = ShopItem[]

export interface BuyItemResponse {
  gold: number
  turn: number
  lives: number
  level: number
  shoppingSuccess: string
}
