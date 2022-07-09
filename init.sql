CREATE DATABASE recipe-picker;

CREATE TABLE ingredients(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    amount NUMERIC
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    steps text,
    pic_url text
);
