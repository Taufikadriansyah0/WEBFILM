import {Nav, Navbar, Container, Button} from 'react-bootstrap';

function ListExample() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className='navbar fixed-top'>
        <Container>
          <Navbar.Brand href="#home" className='font fs-3 fw-semibold text-danger'>NETFLIX</Navbar.Brand>
          <Navbar.Collapse className="mx-auto  hiden fw-medium justify-content-end text-white gap-3">
            <div className='d-flex pt-2 gap-1'> 
            <Nav.Link href="#home" className='text-danger'>Home</Nav.Link>
            <span className="text-danger pt-1 fs-5"><ion-icon name="arrow-dropdown"></ion-icon></span>
            </div>
            <div className='d-flex pt-2 gap-1'>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <span className="text-white pt-1 fs-5"><ion-icon name="arrow-dropdown"></ion-icon></span>
            </div>
            <div className='d-flex pt-2 gap-1'>
            <Nav.Link href="#about">About</Nav.Link>
            <span className="text-white pt-1 fs-5"><ion-icon name="arrow-dropdown"></ion-icon></span>
            </div>
          </Navbar.Collapse>
          <div class="dropdown show px-3 d-flex gap-2">
          <Button variant='danger' class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <ion-icon name="menu"></ion-icon>
          </Button>
            <ul class="dropdown-menu ">
              <li><a class="dropdown-item" href="#home">Home</a></li>
              <li><a class="dropdown-item" href="#trending">Trending</a></li>
              <li><a class="dropdown-item" href="#about">About</a></li>
            <li><a href="#film"><span className='px-3 fs-5'><ion-icon name="search"></ion-icon></span></a></li>
              </ul>
          </div>
            <Button className='ml-5 hiden' variant='danger' href="#film"><span className=''><ion-icon name="search"></ion-icon></span></Button>
        </Container>
      </Navbar>
    </>
  );
}

export default ListExample;