import sortUser from "../sortUser";

test('sort users', () => {
    let result = sortUser([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]);
  
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);

    result = sortUser([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 50},
        {name: 'лучник', health: 50},
      ]);
  
    expect(result).toEqual([
        {name: 'маг', health: 50},
        {name: 'лучник', health: 50},
        {name: 'мечник', health: 10},
      ]);
  });