'use client';

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';


export default function RedirectingLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter();
    useEffect(function redirectNewHomeEffect() {
        router.push('https://not-pnu.github.io/sugang/');
    }, []);

    return (
        <>{children}</>
    );
}