DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

DROP TABLE IF EXISTS guests;
CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  room_number VARCHAR(255),
  capacity INTEGER,
  available BOOLEAN DEFAULT true
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms (id),
  guest_id INTEGER REFERENCES guests (id),
  check_in DATE,
  check_out DATE
)