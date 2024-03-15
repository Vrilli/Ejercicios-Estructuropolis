"use client";
import React, { useState } from "react";

const PromedioNumeros: React.FC = () => {
  // Manejo de estados
  const [numeros, setNumeros] = useState<string>("");
  const [promedio, setPromedio] = useState<number | null>(null);

  // Funcion que dispara el estado number y obtiene el valor
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumeros(e.target.value);
  };

  // Funcion que realiza el calculo del promedio de los numeros
  const calcularPromedio = () => {
    const numerosArray: number[] = numeros.split(",").map(Number);
    const suma: number = numerosArray.reduce(
      (total, numero) => total + numero,
      0
    );
    const promedioCalculado: number = suma / numerosArray.length;
    setPromedio(promedioCalculado);
  };

  return (
    <div
      style={{ backgroundImage: "url('assets/promedio.jpeg')" }}
      className="text-center pt-10 h-screen bg-cover bg-center"
    >
      <h1 className="text-6xl text-red-400 font-bold">
        Calculadora de Promedio
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 py-10">
        <input
          className="w-[380px] border border-purple-500"
          type="text"
          placeholder="Ingrese 5 números separados por coma"
          value={numeros}
          onChange={handleInputChange}
        />
        <div className="py-5">
          <button
            className="rounded bg-purple-300 border border-purple-500"
            onClick={calcularPromedio}
          >
            Calcular Promedio
          </button>
        </div>
      </div>
      <div>
        {promedio !== null && (
          <p className="text-2xl text-red-400 text-center font-bold">
            El promedio de los números ingresados es: {promedio}
          </p>
        )}
      </div>
    </div>
  );
};

export default PromedioNumeros;
