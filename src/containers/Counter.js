
import { connect } from 'react-redux';
import Counter from '../components/Counter';


function mapStateToProps({count}) {

    return {
        count
    }
}

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;