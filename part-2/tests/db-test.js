const expect = require( 'chai' ).expect
const query = require('../database.js')

describe( 'getAll()', ()=> {
  it( 'List every guest for hotel', ()=> {
    return query.getAll()
    .then( results => {
      console.log('these are the results guest', results)
      expect(results[0].name).to.equal('Aurthur Velti')
      expect(results[1].name).to.equal('Kurtis Pougher')
    })
  })
})
describe( 'getAllRooms()', ()=> {
  it( 'List every guest for hotel', ()=> {
    return query.getAllRooms()
    .then( results => {
      console.log('these are the results rooms', results)
      expect(results[0].room_number).to.equal('101')
      expect(results[1].room_number).to.equal('102')
    })
  })
})
describe( 'getAllBookedRooms()', ()=> {
  it( 'List every guest for hotel', ()=> {
    return query.getAllBookedRooms(1)
    .then( results => {
      console.log('these are the results booked rooms', results)
      expect(results[0].name).to.equal('Aurthur Velti')
      expect(results[1].room_id).to.equal(4) })
  })
})