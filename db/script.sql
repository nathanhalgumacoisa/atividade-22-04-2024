CREATE DATABASE nathan;

\c nathan

CREATE TABLE usuarios (
 nome VARCHAR(100),
 sobrenome VARCHAR(100),
 data DATE,
 email VARCHAR(100),
 id SERIAL PRIMARY KEY
 );