import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { Filme } from '../../interface/Filme.interface'


interface HomeProps { }
interface HomeState {
  filmes: Filme[]
}
export default class Home extends React.Component<HomeProps, HomeState> {

  constructor(props: HomeProps) {
    super(props)
    this.state = {
      filmes: []
    }
    this.loadFilmes.bind(this)
  }

  componentDidMount() {
    this.loadFilmes()
  }

  loadFilmes() {
    //url api: https://sujeitoprogramador.com/r-api/?api=filmes/
    fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
      .then(response => response.json())
      .then(json => {
        this.setState({ filmes: json })
        console.log(JSON.stringify(json[0]))
      })
  }

  render() {
    return <div className="container">
      <div className="lista-filmes">
        {this.state.filmes.map(filme => {
          return (
            <article key={filme.id} className="filme">
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt="capa" />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>)
        })}
      </div>

    </div>
  }
}