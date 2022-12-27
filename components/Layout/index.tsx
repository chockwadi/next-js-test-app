import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './layout.module.scss';
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={style.layout}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}
export default Layout