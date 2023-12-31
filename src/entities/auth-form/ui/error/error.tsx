import type { FieldError as FE } from 'react-hook-form'

import s from './style.module.css'

export function FieldError(props: { error?: FE; touched?: boolean }) {
  if (props.error && props.touched) {
    const errorMessage = props.error.message
      ?.split(' ')
      .splice(1)
      .join(' ')

    return <div className={s.fieldError}>{errorMessage}</div>
  } else {
    return null
  }
}
