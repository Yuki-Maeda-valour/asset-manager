type CreateFormDataType = {
  username: FormDataEntryValue | null
  role: FormDataEntryValue | null
}

export const userCreateAction = (
  state: CreateFormDataType,
  formData: FormData,
) => {
  const newState = {
    ...state,
    username: formData.get('username'),
    role: formData.get('role'),
  }
  return newState
}

type EditFormDataType = {
  username: FormDataEntryValue | null
  role: FormDataEntryValue | null
}

export const userEditAction = (state: EditFormDataType, formData: FormData) => {
  const newState = {
    ...state,
    username: formData.get('username'),
    role: formData.get('role'),
  }
  return newState
}
