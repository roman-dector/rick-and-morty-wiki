import { compose } from '@reduxjs/toolkit'

import { withFeatureFlags } from './feature-flags'
import { withStore } from './store'

export const withProviders = compose(withStore, withFeatureFlags)
