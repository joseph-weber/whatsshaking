class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cocktail: []
      }
      this.getCocktail = this.getCocktail.bind(this)
    }
    getCocktail(){
      fetch("/cocktails/")
        .then(response => response.json())
          .then(cocktail => {
            this.setState({
              cocktail: cocktail
            })
          }).catch(error => this.setState({
            cocktail: false,
          }));
    }
  render(){
    return (
      <div>
        <Search
        getCocktail = {this.getCocktail}
        cocktails = {this.state.cocktail}
        />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector("main")
);
