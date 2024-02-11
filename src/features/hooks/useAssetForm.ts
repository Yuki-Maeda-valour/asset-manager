import { useState } from 'react'
import { AssetType } from '@/graphql/client/gqlhooks'

type AssetFormState = {
  id?: number
  name: string
  type: AssetType
}

type UseAssetFormProps = {
  initialState: AssetFormState
}

type UseAssetFormReturn = {
  formState: AssetFormState
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTypeChange: (nextValue: AssetType) => void
}

export const useAssetForm = ({
  initialState,
}: UseAssetFormProps): UseAssetFormReturn => {
  const [formState, setFormState] = useState<AssetFormState>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleTypeChange = (nextValue: AssetType) => {
    setFormState((prevState) => ({
      ...prevState,
      type: nextValue,
    }))
  }

  return { formState, handleChange, handleTypeChange }
}
