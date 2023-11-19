import { userModel } from 'entities/user'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const withAuthentication =
  (Component: FC<any>) => (props: any) => {
    const isSignedIn = useSelector(userModel.selectors.isSignedIn)

    if (!isSignedIn) {
      return <Navigate to={'/signin'} />
    }

    return <Component {...props} />
  }
