import { getCurrentInstance } from 'vue'
import guards from './utils/guards'
import type { GuardFunction } from './utils/types'

export default function onBeforeModalClose(callback: GuardFunction) {
  const a = getCurrentInstance()
  const attrModalId = String(a?.props?.modalId || a?.props?.['modal-id'] || a?.attrs?.modalId)

  const modalId = attrModalId.replace(/[^0-9]/g, '')

  guards.add(Number(modalId), 'close', callback)
}
