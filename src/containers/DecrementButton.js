import { connect } from 'react-redux';
import DecrementButton from '../components/DecrementButton';
import { decrementCounter } from '../actions';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {

    return {

        handleClick: bindActionCreators( decrementCounter , dispatch)
    }
}

const DecrementButtonContainer = connect(null, mapDispatchToProps)(DecrementButton);
export default DecrementButtonContainer;