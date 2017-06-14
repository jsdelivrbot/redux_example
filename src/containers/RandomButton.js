import { connect } from 'react-redux';
import RandomButton from '../components/RandomButton';
import { drawRandomNumber } from '../actions';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {

    return {

        handleClick: bindActionCreators( drawRandomNumber , dispatch)
    }
}

const RandomButtonContainer = connect(null, mapDispatchToProps)(RandomButton);
export default RandomButtonContainer;