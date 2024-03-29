import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...imputs: ClassValue[]) => {
  return twMerge(clsx(imputs))
}
