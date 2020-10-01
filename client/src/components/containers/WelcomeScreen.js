import WelcomeScreen from '../ui/WelcomeScreen'
import { connect } from 'react-redux'
import { changeError } from '../../actions'

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  changeError (error) {
    dispatch(changeError(error))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
