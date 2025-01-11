import { useEffect } from 'react';
import homeData from '../data/home.json'

export default function HeadOptions() {
    useEffect(() => {

        //title

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = 'Hey there';
            } else {
                document.title = homeData.name[1];
            }
        };
        document.title = homeData.name[1];
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);

        };
    }, []);

    return null;
}
