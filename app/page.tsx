"use client"

import { useState } from "react"

export default function Home() {
  const numeros = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29
  ]

  const [valorX, setValorX] = useState("")
  const [resultado, setResultado] = useState(null)
  const [mensagem, setMensagem] = useState("")

  function calcular() {
    setMensagem("")
    setResultado(null)

    if (valorX === "") {
      setMensagem("Por favor, introduza um valor para X.")
      return
    }

    const x = Number(valorX)

    if (x < 0 || x > 10) {
      setMensagem("O valor de X deve estar entre 0 e 10.")
      return
    }

    const y = 2 * x * x + 5

    setResultado({
      x: x,
      y: y
    })
  }

  function limpar() {
    setValorX("")
    setResultado(null)
    setMensagem("")
  }

  return (
    <main className="container">
      <div className="card">

        <h1>Calculadora Matemática</h1>

        <p className="descricao">
          Digite um valor de X entre 0 e 10 para calcular:
        </p>

        <div className="formula">
          y = 2x² + 5
        </div>

        <div className="lista">
          <h2>30 primeiros números inteiros</h2>

          <p>
            {numeros.join(", ")}
          </p>
        </div>

        <label htmlFor="valorX">
          Valor de X
        </label>

        <input
          id="valorX"
          type="number"
          value={valorX}
          onChange={(e) => setValorX(e.target.value)}
          placeholder="Digite um valor de 0 a 10"
        />

        <div className="botoes">

          <button onClick={calcular}>
            Calcular
          </button>

          <button
            className="limpar"
            onClick={limpar}
          >
            Limpar
          </button>

        </div>

        {mensagem && (
          <div className="mensagem">
            {mensagem}
          </div>
        )}

        {resultado && (
          <div
            className={
              resultado.y > 100
                ? "resultado alto"
                : "resultado"
            }
          >
            Resultado: 2 × {resultado.x}² + 5 = {resultado.y}
          </div>
        )}

      </div>
    </main>
  )
}