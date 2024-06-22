import {useEffect, useState} from "react";
import debounce from "./debounce";

enum SCREEN_WIDTHS { "mobile" , "tablet" , "720p" ,"1080p" ,"2k" ,"4k" }

export const useScreenWidth = (): SCREEN_WIDTHS => {

        const getCurrentScreenSize = (): SCREEN_WIDTHS => {
            if (window.innerWidth < 480) {
                return SCREEN_WIDTHS.mobile
            } else if (window.innerWidth < 720) {
                return SCREEN_WIDTHS.tablet
            } else if (window.innerWidth < 1080) {
                return SCREEN_WIDTHS["720p"]
            } else if (window.innerWidth < 1440) {
                return SCREEN_WIDTHS["1080p"]
            } else if (window.innerWidth < 2160) {
                return SCREEN_WIDTHS["2k"]
            } else {
                return SCREEN_WIDTHS["4k"]
            }
        }
        const [screenSize, setScreenSize] = useState<SCREEN_WIDTHS>(getCurrentScreenSize());

        useEffect(() => {
            const processChange = debounce(() =>  setScreenSize(getCurrentScreenSize()), 100);
            window.addEventListener('resize', processChange);
            processChange();
            return () => window.removeEventListener('resize', processChange);
        }, []);

        return screenSize;
};
