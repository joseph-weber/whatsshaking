class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <button onClick={()=>{this.props.getCocktail()}}>Search</button>
      </div>
    )
  }
}
