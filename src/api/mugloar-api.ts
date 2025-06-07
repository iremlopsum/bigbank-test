import type {
  GameResponse,
  SolveResponse,
  BuyItemResponse,
  ShopItemsResponse,
  ReputationResponse,
  MessageListResponse,
} from '@/types/api-types'

const BASE_URL = 'https://dragonsofmugloar.com/api/v2'

function handleError(response: Response) {
  if (!response.ok) {
    throw new Error(`API Error ${response.status}: ${response.statusText}`)
  }
  return response
}

export class MugloarAPI {
  static async startGame(): Promise<GameResponse> {
    const res = await fetch(`${BASE_URL}/game/start`, { method: 'POST' })
    handleError(res)
    return await res.json()
  }

  static async getReputation(gameId: string): Promise<ReputationResponse> {
    const res = await fetch(`${BASE_URL}/${gameId}/investigate/reputation`, { method: 'POST' })
    handleError(res)
    return await res.json()
  }

  static async getMessages(gameId: string): Promise<MessageListResponse> {
    const res = await fetch(`${BASE_URL}/${gameId}/messages`)
    handleError(res)
    return await res.json()
  }

  static async solveMessage(gameId: string, adId: string): Promise<SolveResponse> {
    const res = await fetch(`${BASE_URL}/${gameId}/solve/${adId}`, { method: 'POST' })
    handleError(res)
    return await res.json()
  }

  static async getShopItems(gameId: string): Promise<ShopItemsResponse> {
    const res = await fetch(`${BASE_URL}/${gameId}/shop`)
    handleError(res)
    return await res.json()
  }

  static async buyItem(gameId: string, itemId: string): Promise<BuyItemResponse> {
    const res = await fetch(`${BASE_URL}/${gameId}/shop/buy/${itemId}`, { method: 'POST' })
    handleError(res)
    return await res.json()
  }
}
