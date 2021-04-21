import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  //başka komponentten bilgi akışı için yapıcı blok başlatıyoruz.
  //Yeni nesil react ile buna gerek kalmamıştır. Direkt promps ime bilgi çekilebilmektedir.
//   constructor(props) {
//   //super denilerek bu props componentimize taşınmış oluyor.
// super(props);
//   this.state = {
//   categories: [
//    { categoryId: 1, categoryName: "Beverage" },
//    { categoryId: 2, categoryName: "Condiments" }
//    ],
//    };
//   }
  state = {
    categories: []
  };
  //yaşam döngüsülü ile component yerleştiğinde;
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            //buradaki döngü ile statedeki nesne notasyonlarını dönebiliriz.
            this.state.categories.map(category => (
              //key veriyoruz çünkü id ye göre daha fazla performans göstersin.
              <ListGroupItem
              active={category.categoryName===this.props.currentCategory?true:false}
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}

export default CategoryList;
