export type FormDataType = {
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const assetCreateAction = (state: FormDataType, formData: FormData) => {
  const newState = {
    name: formData.get('name'),
    type: formData.get('type'),
  }
  console.log(newState)
  return newState
}
