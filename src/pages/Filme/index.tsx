import React from 'react'
import './filme.css'
import { Filme as Fm } from '../../interface/Filme.interface'
interface Iprops {
  match: any
}
interface Istate {
  filme: Fm | null

}
export default class Filme extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      filme: null
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ filme: json })
      }
      )
  }
  render() {
    return (
      <div className="filme-info">
        <h1>{this.state.filme && this.state.filme.nome}</h1>
        <img src={(this.state.filme && this.state.filme.foto) || ''} alt="foto" />
        {this.state.filme && <h3>Sinopse</h3>}
        {this.state.filme && this.state.filme.sinopse}
      </div>
    )
  }
}