type CreateFormDataType = {
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const assetCreateAction = (
  state: CreateFormDataType,
  formData: FormData,
) => {
  const newState = {
    ...state,
    name: formData.get('name'),
    type: formData.get('type'),
  }
  return newState
}

type EditFormDataType = {
  id: FormDataEntryValue | null
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const assetEditAction = (
  state: EditFormDataType,
  formData: FormData,
) => {
  const newState = {
    ...state,
    id: formData.get('id'),
    name: formData.get('name'),
    type: formData.get('type'),
  }
  return newState
}
