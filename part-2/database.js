const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hotel_db';
const db = pgp(connectionString);

const query = {
  getAllGuests(){
    return db.any('SELECT name, id, email from guests')
  },
  getAllRooms(){
    return db.any('SELECT room_number, capacity, available FROM rooms WHERE available = $1',[true])
  },
  getAllBookedRooms(guest_id){
    return db.any(`
      SELECT bookings.check_in, bookings.check_out, bookings.room_id, bookings.guest_id, guests.name, rooms.capacity
      FROM guests
      JOIN bookings
      ON guests.id = bookings.guest_id
      Join rooms 
      ON rooms.id = bookings.room_id
      WHERE guest_id = $1
    `,[guest_id])
   }

}
module.exports = query;