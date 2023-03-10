import React, {FC, useEffect, useState} from 'react';

import Tabs from "./Tabs/Tabs";
import {TABS_CONFIG} from "./Tabs/TabsConfig";
import Footer from "./Tabs/Footer/Footer";
import styles from "./Aside.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import {Routes} from "../../../constants/routes";



const Aside: FC = () => {

    const [activeTabItem, setActiveTabItem] = useState<number>(1);

    const navigate = useNavigate()
    const location = useLocation()

    const handleSetActiveTabItem = (id: number) => {
        setActiveTabItem(id);
        tabSwitcher(id)
    }

    const tabSwitcher = (id: number) => {
        switch (id) {
            case 1:
                navigate(Routes.main)
                return
            case 2:
                navigate(Routes.trends)
                return
            case 3:
                navigate(Routes.favorites)
                return
            case 4:
                navigate(Routes.settings)
                return
            default:
                return
        }
    }

    useEffect(() => {
        switch (location.pathname) {
            case "/main" :
                return setActiveTabItem(1)
            case "/settings" :
                return setActiveTabItem(4)
            case "/trends" :
                return setActiveTabItem(2)
            case "/favorites" :
                return setActiveTabItem(3)

            default : setActiveTabItem(1)
        }
    }, [location]);

    return (
        <div className={styles.asideWrapper}>
            <Tabs config={TABS_CONFIG} onClick={handleSetActiveTabItem} activeTabItem={activeTabItem}/>
            <Footer/>
        </div>
    );
};

export default Aside;

