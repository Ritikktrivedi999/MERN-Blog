import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export default function ThemeProvider({ children }) {
    const { theme } = useSelector((state) => state.theme);
    const isDarkMode = theme === 'dark';

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <div className={isDarkMode ? 'bg-[rgb(16,23,42)] text-gray-200' : 'bg-white text-gray-700 min-h-screen'} >
                {children}
            </div>
        </div>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

