import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '2',
      name: 'Item Two',
      qty: 120,
      description: 'This is item two',
    },
    {
      id: '3',
      name: 'Item Three',
      qty: 200,
      description: 'This is item three',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
