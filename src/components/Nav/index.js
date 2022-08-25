

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({pages = [], setCurrentPage, currentPage}) => {
    return (
        <Navbar className='Nav ml-auto'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {pages.map((Page, index) => (
                            <Nav.Link onClick={() => setCurrentPage(Page)}>{(Page.name)}</Nav.Link>
                        )
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;