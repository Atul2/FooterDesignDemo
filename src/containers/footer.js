import React from 'react';
import Footer from '../components/footer';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link>Story</Footer.Link>
                    <Footer.Link>Clients</Footer.Link>
                    <Footer.Link>Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link>Marketing</Footer.Link>
                    <Footer.Link>Consulting</Footer.Link>
                    <Footer.Link>Devlopment</Footer.Link>
                    <Footer.Link>Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link>United States</Footer.Link>
                    <Footer.Link>United Kingdom</Footer.Link>
                    <Footer.Link>Australia</Footer.Link>
                    <Footer.Link>Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link>Instagram</Footer.Link>
                    <Footer.Link>Facebook</Footer.Link>
                    <Footer.Link>Youtube</Footer.Link>
                    <Footer.Link>Twitter</Footer.Link>
                </Footer.Column>
              </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}