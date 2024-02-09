type CreateFormDataType = {
  username: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const userCreateAction = (
  state: CreateFormDataType,
  formData: FormData,
) => {
  const newState = {
    ...state,
    username: formData.get('username'),
    type: formData.get('type'),
  }
  return newState
}

type EditFormDataType = {
  id: FormDataEntryValue | null
  username: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const userEditAction = (state: EditFormDataType, formData: FormData) => {
  const newState = {
    ...state,
    id: formData.get('id'),
    username: formData.get('username'),
    type: formData.get('type'),
  }
  return newState
}
