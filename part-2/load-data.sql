-- \copy rooms(id, room_number, capacity) FROM '/Users/davinataylor/LGDavina/phase-3-challenge/part-2/rooms.csv' DELIMITER ',' CSV HEADER;
-- \copy guests(id, name, email) FROM'/Users/davinataylor/LGDavina/phase-3-challenge/part-2/guests.csv' DELIMITER ',' CSV HEADER;
-- \copy bookings(id, room_id, guest_id, check_in, check_out) FROM '/Users/davinataylor/LGDavina/phase-3-challenge/part-2/bookings.csv' DELIMITER ',' CSV HEADER;

INSERT INTO guests(name, email) VALUES('Lebron James', 'lebron23@gmail.com');
INSERT INTO guests(name, email) VALUES('Beyonce Knowles', 'beyonce@gmail.com');
INSERT INTO guests(name, email) VALUES('Kevin Hart', 'kevin@gmail.com');
INSERT INTO guests(name, email) VALUES('Michael Jordan', 'jordan@gmail.com');
INSERT INTO guests(name, email) VALUES('Jasmine Suvillan', 'jas@gmail.com');
INSERT INTO guests(name, email) VALUES('Stephan Curry', 'stephan@gmail.com');
INSERT INTO guests(name, email) VALUES('Michelle Obama', 'michelle@gmail.com');
INSERT INTO guests(name, email) VALUES('Kelly Rowland', 'rowland@yahoo.com');

INSERT INTO rooms(room_number, capacity, available) VALUES(101, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(102, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(201, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(202, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(301, 1, false);
INSERT INTO rooms(room_number, capacity, available) VALUES(302, 1, false);
INSERT INTO rooms(room_number, capacity, available) VALUES(401, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(402, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(501, 1, true);
INSERT INTO rooms(room_number, capacity, available) VALUES(502, 1, false);

INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(1, 1, '2017-07-03', '2017-07-10');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(2, 2, '2017-08-03', '2017-08-07');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(3, 3, '2017-06-03', '2017-06-06');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(4, 4, '2017-10-03', '2017-10-09');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(5, 5, '2017-01-03', '2017-01-11');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(6, 6, '2017-02-03', '2017-02-08');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(7, 7, '2017-04-03', '2017-04-09');
INSERT INTO bookings(room_id, guest_id, check_in, check_out) VALUES(8, 8, '2017-03-03', '2017-03-04');