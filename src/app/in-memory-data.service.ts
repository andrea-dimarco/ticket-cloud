import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from './event';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      {   id:1, 
          name: 'Gorla plays Paganini', 
          date: '12/12/2024', 
          category: 'Music',
          url:'https://i.redd.it/5zxwdwh98s681.png',
          description: 'Lorem ipsum',
          capacity: 2000 },
    {
        id:2, 
        name: 'Gorla plays Bach', 
        date: '12/11/2024', 
        category: 'Music',        
        url:'https://i.redd.it/5zxwdwh98s681.png',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    {
        id:3, 
        name: 'Holographic Michael Jackson', 
        date: '12/06/2024', 
        category: 'Music',        
        url:'https://i.ytimg.com/vi/fVUvWOESZLY/maxresdefault.jpg',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    
    {
        id:4, 
        name: 'Musk vs Zuck', 
        date: '31/12/2024', 
        category: 'Sport',        
        url:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fmark-zuckerberg-elon-musk-fight-0.jpg?fit=max&cbr=1&q=90&w=750&h=500',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    {
        id:5, 
        name: 'Briscola World Cup', 
        date: '25/06/2025', 
        category: 'Sport',        
        url:'https://www.casariposovilladelsole.com/wp-content/uploads/2017/08/IMG_7625.jpg',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    {
        id:6, 
        name: 'Calcio Storico - Finals', 
        date: '24/06/2025', 
        category: 'Sport',        
        url:'https://lp-cms-production.imgix.net/2023-03/GettyImages-1242054088.jpg?auto=format&w=1440&h=810&fit=crop&q=75',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    
    {
        id:7, 
        name: 'Romeo and Juliet', 
        date: '30/03/2026', 
        category: 'Show',        
        url:'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp',
        description: 'Lorem ipsum',
        capacity: 2000

    },
    {
        id:8, 
        name: 'Les Miserables', 
        date: '02/10/2024', 
        category: 'Show',        
        url:'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp',
        description: 'Lorem ipsum',
        capacity: 2000
    },
    {
        id:9, 
        name: 'Assemblywomen', 
        date: '12/07/2026', 
        category: 'Show',
        url: 'https://onetwostream.com/blog/wp-content/uploads/2019/10/twitch-female.jpg',
        description: 'Lorem ipsum',
        capacity: 2000
    },

    {
        id:10, 
        name: 'Gender Studies Convention', 
        date: '31/02/2025', 
        category: 'Other',
        url:'https://www.europeantheatre.eu/uploads/cache/650/builder-templates/pages/1637/3dea6c1779e5f445ce559f9aedef9c5aceb0ec80.png',
        description: 'Lorem ipsum',
        capacity: 2000    
    },
    {
        id:11, 
        name: 'Fyre Festival',
        date: '10/08/2024',
        category: 'Other',
        url:'https://m.media-amazon.com/images/M/MV5BMjQ2NzE1MjYxMV5BMl5BanBnXkFtZTgwMjM3MDQxNzM@._V1_.jpg',
        description: 'Lorem ipsum',
        capacity: 2000
    },
    {
        id:12, 
        name: 'Rainfurrest', 
        date: '11/04/2024', 
        category: 'Other',
        url:'https://www.rainfurrest.org/2015/images/winterparty-pic1.jpg',
        description: 'Lorem ipsum',
        capacity: 2000
    }
    ];
    return {events};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(events: Event[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 0;
  }
}