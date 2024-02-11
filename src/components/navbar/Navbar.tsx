import { Calendar } from '../calendar/Calendar';
import styles from './Navbar.module.scss';
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { changePanelPosition } from "../../features/panelPosition";

export const Navbar: React.FC = () => {

  const dispatch = useAppDispatch();

  return (
    <>
    <div className={styles.container}>
    <button className={styles.button} onClick={()=>{
      dispatch(changePanelPosition('left'))
    }}>
      Start
    </button>
    <button className={styles.button} onClick={()=>{
      dispatch(changePanelPosition('right'))
    }}>
      End
    </button>
    </div>
    <Calendar/>
    </>
  )

}