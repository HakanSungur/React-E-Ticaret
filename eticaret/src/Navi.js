//export public anlamına geliyor veher taraftan eriş sağlanıyor.
//Navi bir component olabilmesi için reacttan componenti miras almalıdır. Extends ile miras alıyor.
//Class componentinin içine başka bir fonksiyon yazarak diğer fonksiyonda çağırabiliriz.

import React, { } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";
import CartSummary from "./CartSummary";
import {Link} from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/form1">Form Demo1</Link>
                  
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink>
                  
                  <Link to="/form2">Form Demo2</Link>
                </NavLink>
                
              </NavItem>
              <NavItem>
                
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
