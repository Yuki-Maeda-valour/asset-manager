export type FormDataType = {
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const assetCreateAction = (state: FormDataType, formData: FormData) => {
  const newState = {
    ...state,
    name: formData.get('name'),
    type: formData.get('type'),
  }
  return newState
}
