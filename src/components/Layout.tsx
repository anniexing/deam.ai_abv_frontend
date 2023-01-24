import {Container} from 'react-bootstrap';
import "../styles/global.css";
import BeerRoute from "../routes/BeerRoute";

const Layout = () => {
    return (
        <div className="wrapper">
            <Container>
                <BeerRoute />
            </Container>
        </div>

    )
}

export default Layout;
