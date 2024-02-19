import { Maybe } from 'nexus/dist/core'

/**
 * 日付文字列を指定された形式でフォーマットします。
 * @param {string | undefined} dateString - フォーマットする日付の文字列。未定義の場合は空文字列を返します。
 * @returns {string} フォーマットされた日付文字列。`YYYY/MM/DD HH:mm`形式で返されます。日付が未定義の場合は空文字列を返します。
 */
export const formatDate = (dateString: Maybe<string> | undefined): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${year}/${month}/${day} ${hours}:${minutes}`
}

export function toLocalDateTimeStringForInput(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}
