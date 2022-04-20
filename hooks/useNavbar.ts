import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { NavbarState, actionGenerators } from "../store/reducers/navbar"

export const useNavbar = () => {
    const navbarState: NavbarState = useSelector((state: RootState) => (state.navbar));
    const dispatch = useDispatch();

    const setNavbarProgress = useCallback((progress: boolean) => {
        dispatch(actionGenerators.setProgress(progress));
    }, [dispatch]);

    return {
        navbarState,
        setNavbarProgress
    }
}