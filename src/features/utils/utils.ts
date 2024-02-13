import { Maybe } from 'nexus/dist/core'

/**
 * 日付文字列を指定された形式でフォーマットします。
 * @param {string | undefined} dateString - フォーマットする日付の文字列。未定義の場合は空文字列を返します。
 * @returns {string} フォーマットされた日付文字列。`YYYY/MM/DD HH:mm`形式で返されます。日付が未定義の場合は空文字列を返します。
 */
export const formatDate = (dateString: Maybe<string> | undefined): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
