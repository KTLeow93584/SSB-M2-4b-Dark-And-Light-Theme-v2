import { UseTheme, UseThemeUpdate } from './ThemeContext.jsx';
import { GetAuth, UpdateAuth } from './AuthContext.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const themeNames = {
    true: {
        prefix: "dark",
        srcURL: "dark-mode.gif"
    },
    false: {
        prefix: "light",
        srcURL: "light-mode.gif"
    }
};

export default function Form() {
    const currentAuthState = GetAuth();

    return (
        <>
            <Panel title={currentAuthState}>
                <Row>
                    <ButtonSection />
                </Row>
            </Panel>
        </>
    );
}

function Panel({ title, children }) {
    // ====================
    const isDarkTheme = UseTheme();
    const className = "panel-" + themeNames[isDarkTheme.toString()].prefix;
    // ====================
    return (
        <Container className={`${className} mt-3`}>
            <Row className="d-flex justify-content-between">
                <Col className="col-8">
                    <h1>{title}</h1>
                    {children}
                </Col>
                <Col className="col-4 d-flex align-items-center justify-content-center">
                    <Image src={new URL("./assets/" + themeNames[isDarkTheme.toString()].srcURL, import.meta.url)} width="100px" height="auto" />
                </Col>
            </Row>
        </Container>
    );
    // ====================
}

function ButtonSection() {
    // ====================
    const setCurrentAuthState = UpdateAuth();
    // ====================
    const isDarkTheme = UseTheme();
    const setTheme = UseThemeUpdate();

    const className = "button-" + themeNames[isDarkTheme.toString()];
    // ====================
    return (
        <Col className="col-12 d-flex align-items-center justify-content-start">
            <Button variant="primary" className={`${className} me-3`} onClick={() => setCurrentAuthState("Sign up")}>Sign up</Button>
            <Button variant="primary" className={`${className} me-3`} onClick={() => setCurrentAuthState("Log in")}>Log in</Button>
            <Button variant="primary" className={`${className} me-3`} onClick={() => setTheme(!isDarkTheme)}>Toggle Theme</Button>
        </Col>
    );
    // ====================
}