let query = require('./database.js');

let guests = () => {
  let idLength = `ID`.length
  let guestNameLength = `Marchelle Bloodworthe  `.length
  let emailLength = `mbloodwortheb@seattletimes.com       `.length
  console.log(`|----+-------------------------+---------------------------------------|`)
  console.log(`| ID | Guest Name              | EMAIL                                 |`)
  console.log(`|----+-------------------------+---------------------------------------|`)
  let list = query.getAllGuests()
  .then( guests => {
      guests.map((guest) => {
        console.log("| " +
          (" ").repeat( idLength - guest.id.toString().length) +
          guest.id +
           " | " +
          guest.name +
          (" ").repeat( guestNameLength - guest.name.length) +
           " | " +
          guest.email +
          (" ").repeat(emailLength - guest.email.length) + " | ")
      })
    })
    .then( ()=> console.log( `|----+-------------------------+---------------------------------------|` ) )
}

let rooms = () => {
  let roomLength = `room_number`.length
  let capacityLength = `capacity`.length
  let availableLength = `available`.length
  console.log(`|--------------+--------+---------|`)
  console.log(`| Available  | Capacity | Room # |`)
  console.log(`|--------------+--------+---------|`)
  let list = query.getAllRooms()
    .then( rooms => {
      rooms.map( room => {
        console.log("| " +
          (" ").repeat( availableLength - room.available.length) +
          room.available +
           " | " +
          room.capacity +
          (" ").repeat( roomLength - room.room_number.length) +
           " | " +
          room.room_number +
          (" ").repeat(capacityLength - room.capacity.length) + " | ")
      })
    })
    .then( ()=> console.log( `|---------+-----------+-----------|` ) )
}

let ordersById = argument => {
  let orderLength = `order id`.length
  let costLength = `total cost`.length
  console.log(`|----------+------------|`)
  console.log(`| order id | total cost |`)
  console.log(`|----------+------------|`)
  let list = getOrdersByShopperId( argument )
    .then( items => {
      items.map( item => {
        console.log("| " +
          item.id +
          (" ").repeat( orderLength - item.id.toString().length) +
           " | " +
          (" ").repeat(costLength - item.total_cost.length) +
          item.total_cost +
          " | ")
      })
    })
    .then( ()=> console.log( `|----------+------------|` ) )
}

let getAllBookedRooms = (argument) => {
  let shopperNameLength = `shopper name`.length
  let numOrdersLength = `number of orders`.length
  console.log(`|--------------+------------------|`)
  console.log(`| shopper name | number of orders |`)
  console.log(`|--------------+------------------|`)
  let list = query.getAllBookedRooms(2)
    .then( items => {
      console.log(items)
      items.map( item => {
        console.log('this is the booked room --->', item)
        console.log("| " +
          item.fname +
          (" ").repeat( shopperNameLength - item.fname.length) +
           " | " +
          (" ").repeat(numOrdersLength - item.count.toString().length) +
          item.count +
          " | ")
      })
    })
    .then( ()=> console.log( `|--------------+------------------|` ) )
}

let func = process.argv[2]
let argument = process.argv[3]

switch (func) {
  case "guests": guests()
   break;
  case "rooms": rooms()
    break;
  case "bookings": getAllBookedRooms(argument)
    break;
  default:

}