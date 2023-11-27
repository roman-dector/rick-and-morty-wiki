import { ResponseInfo } from './interfaces'

export function selectCurrentPage(info: ResponseInfo): number {
  if (info.next) {
    const nextUrl = new URL(info.next)

    return parseInt(nextUrl.searchParams.get('page')!) - 1
  }

  return info.pages
}