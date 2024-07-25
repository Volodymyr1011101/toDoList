'use client';
import { imageConfig } from '@/imageConfig';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Background.module.scss';
interface Props {}
const Background: NextComponentType<NextPageContext, {}, Props> = () => {
    const [windowWidth, setWindowWidth] = useState<number>(1920);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            });
        };
    }, []);
    return (
        <div className={styles.image}>
            {windowWidth! > 480 && <Image {...imageConfig.backgroundDesktop} />}
            {windowWidth! <= 480 && <Image {...imageConfig.backGroundMobile} />}
        </div>
    );
};

export default Background;
