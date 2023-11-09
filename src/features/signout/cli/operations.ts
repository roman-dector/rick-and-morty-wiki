/* eslint-disable no-console */
import { userModel } from 'entities/user'

export async function signout() {
  const { dispatch } = window.__store__

  try {
    await dispatch(userModel.operations.signout()).unwrap()
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // 'err' definitely has the property 'message';
    // Doc link: https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
    console.error(err?.message)
  }
}
