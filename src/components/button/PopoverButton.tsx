import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react'
import type { PlacementWithLogical } from '@chakra-ui/react'

type PopoverButtonProps = {
  // ポップオーバー内に表示されるコンテンツ
  children?: React.ReactNode
  // ボタンに表示されるラベル
  buttonLabel?: string
  // ポップオーバーの表示位置
  placement?: PlacementWithLogical | undefined
}

/**
 * ボタンをクリックするとポップオーバーが表示されるコンポーネント。
 *
 * @param {PopoverButtonProps} props - PopoverButton コンポーネントのプロパティ。
 * @returns Popover > PopoverTrigger, PopoverContent > Button, PopoverArrow, PopoverCloseButton, PopoverBody
 */
export const PopoverButton = ({
  children,
  buttonLabel,
  placement,
}: PopoverButtonProps) => (
  <Popover placement={placement}>
    <PopoverTrigger>
      <Button>{buttonLabel}</Button>
    </PopoverTrigger>
    <PopoverContent w={'auto'}>
      <PopoverCloseButton />
      <PopoverArrow />
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </Popover>
)
