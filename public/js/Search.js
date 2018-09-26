class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        {this.props.cocktails.length > 0 ?
          <div className="cocktails">
          { this.props.cocktails.map((cocktail, index)=>
          {
            return (
              <div>
              {cocktail.name}
              </div>
            )
          })
        }
        </div>
          :
          ''
        }
        <button onClick={()=>{this.props.getCocktail()}}>Search</button>
      </div>
    )
  }
}
