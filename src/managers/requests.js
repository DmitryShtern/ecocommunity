// import { mapForcast } from "./utils"

const URL = "/api/"

// const fetch = "/search/?query="

// export const fetchWeather = id => {
//   fetch(`${URL}${id}/`).then(response => mapForcast(response.json()))
// }

export const fetchNews = (query = "") => fetch(`/news${query}`).then(response => response.json())
export const fetchArticle = (id = "") => fetch(`/article/${id}`).then(response => response.json())

/*

  componentDidMount() {
    console.log("state: " + JSON.stringify(this.state.data))
    fetch("/news")
      .then(res => res.json())
      .then(data => this.setState({ data }))
    console.log("did mount: " + JSON.stringify(this.state.data))
  }

  render() {
    const { changeActivePage, activePage } = this.props
    console.log("data: " + JSON.stringify(this.state.data))

    return (
      <div className="App">
        <h1>Data</h1>
        {this.state.data.map(row => (
          <div key={row.id}>
            {row.title}
            <br />
            {row.description}
            <br />
            <br />
          </div>
        ))}
      </div>
    )
  
  */

// export const fetchArticle = query => fetch(`${URL}`).then(response => response.json())
