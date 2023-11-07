export class UserNotRegistered extends Error {
  constructor() {
    super('The user must be registered before the sign in process')
    this.name = 'UserNotRegistered'
  }
}

export class UserAlreadyExists extends Error {
  constructor() {
    super('The user is already registered, just sign in')
    this.name = 'UserAlreadyExists'
  }
}

export class UserShouldSignout extends Error {
  constructor() {
    super(
      'The current user must sign out before the new user sign in'
    )
    this.name = 'UserShouldSignout'
  }
}