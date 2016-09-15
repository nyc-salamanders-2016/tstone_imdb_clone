class MovieView extends React.Component {



  render() {
    let data = this.props.data
      if (data.Poster !== "N/A") {
        return (
          <li id="movie-view">
          <img className="avatar" src={data.Poster} alt=""/>
          </li> )
      } else {
        return null
      }
      // }
      // </li>
        // <div className="movie-content">
        //   <p>
        //     <span className="title">{data.Title},</span>
        //     <span className="year">  {data.Year},</span>
        //     <span className="rated">   {data.Rated}</span>
        //   </p>
        //   <p>{data.Plot}</p>
        // </div>
    // )
  }
}
