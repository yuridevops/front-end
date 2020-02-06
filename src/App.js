import React from 'react'
import Cliente from './Components/Clientes/Cliente'
import Produto from './Components/Produtos/Produto'
import Pedido from './Components/Pedidos/Pedido'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Pedido} />
          <Route path="/pedidos" component={Pedido} />
          <Route path="/clientes" component={Cliente} />
          <Route path="/produtos" component={Produto} />

        </div>
      </Switch>
    </Router>
  )
}