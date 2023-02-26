import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';

  hideRooms = false;

  room: Room = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'AirConditioner, Free Wifi, TV, Bathroom',
    price: 1500,
    photos: 'https://unsplash.com/photos/Jk6oSN8wSlo',
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021')
  }, {
    roomNumber: 2, 
    roomType: 'Basic Room',
    amenities: 'AirConditioner, Free Wifi, TV, Bathroom',
    price: 500,
    photos: 'https://unsplash.com/photos/Jk6oSN8wSlo',
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021')
  }, {
    roomNumber: 3,
    roomType: 'BasicDeluxe Room',
    amenities: 'AirConditioner, Free Wifi, TV, Bathroom',
    price: 550,
    photos: 'https://unsplash.com/photos/Jk6oSN8wSlo',
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021')
  }]

  numberOfRooms = this.room.totalRooms;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
