import { connect } from 'react-redux';
import Button from '../components/Button';
import { incrementCounter } from '../actions';
import { bindActionCreators } from 'redux';


function mapDispatchToProps(dispatch) {

    return {

        handleClick: bindActionCreators( incrementCounter , dispatch)
    }
}

const ButtonContainer = connect(null, mapDispatchToProps )(Button);
export default ButtonContainer;