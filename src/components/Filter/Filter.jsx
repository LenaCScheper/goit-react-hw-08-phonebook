import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
    
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const change = e => dispatch(actions.changeFilter(e.target.value));
    return (
     <label className={ s.label}>
           Enter a name
            <input type="text"
                value={value}
                onChange={change} />
    </label>
)   

}