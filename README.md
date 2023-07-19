# Projeto Cyclotron

Este é um projeto proposto pela Lexart que implementa uma função `cyclotron` em JavaScript, que simula o acelerador de partículas denominado "ciclótron". O objetivo é acelerar diferentes tipos de partículas (elétrons, prótons e nêutrons) em uma matriz bidimensional.

## Como funciona

A função `cyclotron` recebe dois argumentos: o tipo de partícula (um caractere "e" para elétron, "p" para próton e "n" para nêutron) e o tamanho do acelerador (um inteiro que representa a largura e altura da matriz). A função então cria uma matriz com o tamanho especificado e coloca a partícula nas bordas, acelerando-as ao longo do caminho.

## Exemplos de uso

```javascript
cyclotron("n", 6).forEach((line) => console.log(line));
```

## O retorno será

```javascript
["n", "n", "n", "n", "n", "n"][("1", "1", "1", "1", "1", "1")][
  ("1", "1", "1", "1", "1", "1")
][("1", "1", "1", "1", "1", "1")][("1", "1", "1", "1", "1", "1")][
  ("1", "1", "1", "1", "1", "1")
];
```
