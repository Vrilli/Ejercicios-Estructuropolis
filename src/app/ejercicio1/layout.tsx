// Utilizo use client por que estoy trabajando con nextjs y para que se me rendericen componentes
//con estados es esencial ese comando es una breve explicación del por que eso.
"use client";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  // Manejo de estados
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | string>("");

  // Funcion donde se realizan las operaciones
  const handleCalculate = () => {
    if (num2 === 0) {
      setResult("No se puede dividir por cero");
    } else {
      setResult(`
        Suma: ${num1 + num2}
        Resta: ${num1 - num2}
        Multiplicación: ${num1 * num2}
        División: ${num1 / num2}
      `);
    }
  };

  return (
    <div
      style={{ backgroundImage: "url('ejerciciio1.png')" }}
      className="text-center h-screen"
    >
      <h2 className="bg-purple-200 text-2xl font-bold  p-4">Calculadora</h2>
      {/* aca se renderiza todo numero 1 y 2 estan compuestos 
      por un label y un input para que el usuario pueda ingresar el 
      numero para que el programa realice las operaciones */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="bg-red-200 p-5">
          <div className="mb-3">
            <label className="text-lg font-semibold mr-3" htmlFor="num1">
              Número 1:
            </label>
            <input
              type="number"
              id="num1"
              value={num1}
              onChange={(e) => setNum1(parseInt(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="text-lg font-semibold mr-3" htmlFor="num2">
              Número 2:
            </label>
            <input
              type="number"
              id="num2"
              value={num2}
              onChange={(e) => setNum2(parseInt(e.target.value))}
            />
          </div>{" "}
          {/* el boton que llama a la funcion hanbleCalculate que es
           la que contiene las operaciones a realizar */}
          <button
            type="submit"
            className="bg-purple-300 rounded border border-purple-500 font-bold text-lg p-2"
            onClick={handleCalculate}
          >
            Calcular
          </button>
        </div>{" "}
        {/* En este div se atra ves del estado result se 
        estan imprimiendo los resultados de las distintas operaciones */}
        <div className="bg-purple-300 p-5">
          <h3 className="font-bold text-xl">Resultados:</h3>
          <pre className="font-medium text-center">{result}</pre>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
