import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart, faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faL } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import questLogo from '../assets/img/logos/Logo-Quest.svg';
import banner from '../assets/img/banner/banner1.jpg';
import product1 from '../assets/img/products/product1.webp';
import product2 from '../assets/img/products/product2.webp';
import product3 from '../assets/img/products/product3.webp';
import artist from '../assets/img/products/artist.jpg';

import './style.css'



export default () => {

    return (
        <>
            <section className="banner mb-5">
                <img src={banner} alt="Banner image" className="img-fluid banner-image" />
                <Container className="banner-text">
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1>¡La cuenta regresiva ha comenzado! CyberQuest</h1>
                            <p>Descubre cientos de productos con descuentos de hasta el 60%. ¡No te lo pierdas!</p>
                            <button className="btn btn-primary">COMPRAR AHORA</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="featured-products mb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="mb-4" key={1}>
                            <Card>
                                <Card.Img variant="top" src={product1} />
                                <Badge bg="secondary" className="position-absolute top-0 end-0">
                                    60% OFF
                                </Badge>
                                <Card.Body>
                                    <Card.Title>Jacket Black Mamba</Card.Title>
                                    <Card.Text>
                                        Descripción del producto.
                                    </Card.Text>
                                    <button className="btn btn-primary">Ver más</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4" key={1}>
                            <Card>
                                <Card.Img variant="top" src={product2} />
                                <Badge bg="secondary" className="position-absolute top-0 end-0">
                                    60% OFF
                                </Badge>
                                <Card.Body>
                                    <Card.Title>Jacket Black Mamba</Card.Title>
                                    <Card.Text>
                                        Descripción del producto.
                                    </Card.Text>
                                    <button className="btn btn-primary">Ver más</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4" key={1}>
                            <Card>
                                <Card.Img variant="top" src={product3} />
                                <Badge bg="secondary" className="position-absolute top-0 end-0">
                                    60% OFF
                                </Badge>
                                <Card.Body>
                                    <Card.Title>Jacket Black Mamba</Card.Title>
                                    <Card.Text>
                                        Descripción del producto.
                                    </Card.Text>
                                    <button className="btn btn-primary">Ver más</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="cyberquest-section mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <h2>CyberQuest: ¡Descuentos de hasta 60% y grandes artistas te esperan!</h2>
                            <p>Descubre las últimas tendencias y colabora con talentos reconocidos. ¡Solo por tiempo limitado!</p>
                            <Image src={artist} roundedCircle />
                        </Col>
                        <Col md={4} className="text-center">
                            <div className="product-card mb-2">
                                <Image src={product1} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Oferta increíble</h5>
                                </div>
                            </div>
                            <div className="product-card">
                                <Image src={product3} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Colaboración exclusiva</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h3>¡No te lo pierdas!</h3>
                            <p>Descubre todas las novedades.</p>
                            <Button variant="primary">EXPLORAR AHORA</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer className="footer py-6 bg-dark text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                                <Image src={questLogo} />
                            </Navbar.Brand>
                            <p>Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.</p>
                        </Col>

                        <Col xs={12} md={4} className="mb-5 mb-lg-0">
                            <span className="h5 mb-3 d-block">Suscríbete</span>
                            <form action="#">
                                <div className="form-row mb-2">
                                    <div className="col-12">
                                        <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                                            <span>Suscríbete</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="text-muted font-small m-0">Nunca compartiremos sus datos. Vea nuestra <Card.Link className="text-white" href="#">Política de privacidad</Card.Link></p>
                        </Col>
                    </Row>
                    <hr className="bg-gray my-5" />
                    <Row>
                        <Col className="mb-md-2">
                            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                                <p className="font-weight-normal font-small mb-0">Copyright<span className="current-year"> 2024</span></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};
