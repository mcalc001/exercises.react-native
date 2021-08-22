import { ThunkDispatch } from '../../store/redux';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

export const useThunkDispatch = () => {
  return useDispatch<ThunkDispatch>();
};

export const useStateSelector = <T>(selector: (state: RootState) => T): T => {
  return useSelector<RootState, T>(selector);
};
