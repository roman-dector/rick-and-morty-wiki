import { searchCli } from 'features/search'
import { signinCli } from 'features/signin'
import { signoutCli } from 'features/signout'
import { signupCli } from 'features/signup'

import { dispatch } from './providers/store'

function configureCli(
  prototype: object,
  ...mixins: unknown[]
): Cli & Record<string, any> {
  const cli = Object.create(prototype)

  return Object.assign(cli, ...mixins)
}

const appCli = configureCli({ dispatch })

appCli.auth = configureCli(appCli, signinCli, signupCli, signoutCli)
appCli.search = searchCli.search

export type AppCli = typeof appCli

export type Cli = {
  dispatch: AppDispatch
}

export function initializeAppCli() {
  window.appCli = appCli
}
