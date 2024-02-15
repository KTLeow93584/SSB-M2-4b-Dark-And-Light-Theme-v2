import { UseTheme, UseThemeUpdate } from './ThemeContext.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer() {
    const isDarkTheme = UseTheme();
    const setDarkTheme = UseThemeUpdate();

    const lightThemeText = "Thank you for visiting. Enjoy the light theme.";
    const darkThemeText = "Thank you for visiting. Have a great day with the dark theme.";

    const text = isDarkTheme ? darkThemeText : lightThemeText;
    return (
        <Container>
            <Row>
                <label>
                    <input type="checkbox" checked={isDarkTheme}
                        onChange={(event) => setDarkTheme(event.target.checked)} />
                    Use Dark Mode
                </label>
            </Row>
            <Row className="ms-3">
                {text}
            </Row>
        </Container>
    );
}