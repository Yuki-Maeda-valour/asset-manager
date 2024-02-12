import { useState } from 'react'
import { AssetStatus, AssetType } from '@/graphql/client/gqlhooks'

type AssetFormState = {
  id?: number
  name: string
  type: AssetType
  status: AssetStatus
}

type UseAssetFormProps = {
  initialState: AssetFormState
}

type UseAssetFormReturn = {
  formState: AssetFormState
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTypeChange: (nextValue: AssetType) => void
  handleStatusChange: (nextValue: AssetStatus) => void
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

  const handleStatusChange = (nextValue: AssetStatus) => {
    setFormState((prevState) => ({
      ...prevState,
      status: nextValue,
    }))
  }

  return { formState, handleChange, handleTypeChange, handleStatusChange }
}
