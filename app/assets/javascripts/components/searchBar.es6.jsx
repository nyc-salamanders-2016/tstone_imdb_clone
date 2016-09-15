class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      itemInfo: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.searchedItemView = this.searchedItemView.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = this.refs.search.value
    $.ajax({
      url: `http://www.omdbapi.com/?s=${title}&plot=short&r=json`,
      method: 'get'
    })
    .done((response) => {
      this.setState({itemInfo: [response]});
    })
  }

  searchedItemView() {
    // debugger
    if (this.state.itemInfo.length > 0) {
      debugger
      return (
        <ul>
          {
            this.state.itemInfo[0].Search.map((movie, i) => {
              return (<MovieView key={i} data={movie} />)
            })
          }
        </ul>

      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
      <div id="nav-bar">
        <h2>IMDB Clone!?</h2>
        <form onSubmit={this.handleSubmit} id="search-bar" action="/find">
          <input ref="search" type="text" placeholder="Find Movies, TV shows, Celebrities, and more..." />
          <button type="submit">Search</button>
        </form>
      </div>
      {this.searchedItemView()}
      </div>
    )
  }

}
