class SearchBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="nav-bar">
        <form id="search-bar"action="/find">
          <input type="text" placeholder="Find Movies, TV shows, Celebrities, and more..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

}
