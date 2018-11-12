import { withHandlers, compose } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { UserIsNotAuthenticated } from '../../utils'

export default compose(
  UserIsNotAuthenticated, // redirect to /projects if user is already authed
  firebaseConnect(), // add props.firebase
  // Handlers as props
  withHandlers({
    googleLogin: ({ firebase, showError, router }) => event =>
      firebase
        .login({ provider: 'google', type: 'popup' })
        .catch(err => showError(err.message)),
   
  }),
)