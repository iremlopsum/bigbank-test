export interface GameResponse {
  gameId: string
  lives: number
  gold: number
  level: number
  score: number
  highScore: number
  turn: number
}

export interface ReputationResponse {
  people: number
  state: number
  underworld: number
}

export interface Message {
  adId: string
  message: string
  reward: string
  expiresIn: number
}

export interface MessageListResponse {
  messages: Message[]
}

export interface SolveResponse {
  success: boolean
  lives: number
  gold: number
  score: number
  highScore: number
  turn: number
  message: string
}

export interface ShopItem {
  id: string
  name: string
  cost: number
}

export interface ShopItemsResponse {
  items: ShopItem[]
}

export interface BuyItemResponse {
  shoppingSuccess: string
  gold: number
  lives: number
  level: number
  turn: number
}
