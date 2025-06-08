'use client';

import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    return (
        <div id="theme-options-wrapper">
            <div
                data-mode="light"
                id="light-mode"
                className="theme-dot"
                onClick={() => setTheme('light')}
            ></div>
            <div
                data-mode="blue"
                id="blue-mode"
                className="theme-dot"
                onClick={() => setTheme('blue')}
            ></div>
            <div
                data-mode="green"
                id="green-mode"
                className="theme-dot"
                onClick={() => setTheme('green')}
            ></div>
            <div
                data-mode="purple"
                id="purple-mode"
                className="theme-dot"
                onClick={() => setTheme('purple')}
            ></div>
        </div>
    );
};

export default ThemeSwitcher; 