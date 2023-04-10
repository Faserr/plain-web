export interface IEventClose {
  background: boolean
  esc: boolean
}

export function DtoEventClose(obj: Partial<IEventClose> = {}): IEventClose {
  const defaultValues: IEventClose = {
    background: false,
    esc: false,
  }

  return Object.assign(defaultValues, obj)
}
