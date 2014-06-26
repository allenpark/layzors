var maps = [];

maps.push({
    field: [['f', 'b', '0', ' ', ' '],
            [' ', ' ', 'F', 'b', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', '0', ' ', '0', ' '],
            [' ', 'f', 'b', ' ', ' '],
            [' ', ' ', ' ', ' ', '0']],
    player: [0, 3],
    buttons: [[1, 4]],
    sliders: [[5, 1]],
    source: [0, 3, 3],
    goal: [2, 1, 1],
    door: [3, 2]
});

maps.push({
    field: [[' ', ' ', ' ', ' ', ' '],
            [' ', 'B', ' ', 'b', ' '],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '0']],
    player: [0, 0],
    buttons: [],
    source: [3, 2, 1],
    goal: [2, 4, 1],
    door: [3, 0]
});

maps.push({
   field: [['0', ' ', '0', '0', ' '],
           [' ', 'b', ' ', ' ', ' '],
           ['f', ' ', ' ', 'b', ' '],
           [' ', ' ', ' ', ' ', 'f']],
   player: [0, 1],
   buttons: [[2, 1]],
   source: [3, 0, 1],
   goal: [1, 2, 3]
});

maps.push({
    field: [[' ', ' ', '0',  ' '],
            ['b', ' ', 'b', 'b'],
            ['0', ' ',  ' ',  ' '],
            [' ', ' ',  'f',  ' '],
            [' ', 'b',  '0',  ' '],
            [' ', ' ', 'b',  ' '],            
            [' ', ' ',  ' ',  '0']],
    player: [0, 0],
    buttons: [[1, 1]],
    source: [5, 0, 0],
    goal: [0, 0, 0]
});

maps.push({
    field: [['0', '0', '0', '0', ' ', ' '],
            ['f', 'b', ' ', 'b', 'b', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', '0', ' ', '0', '0', ' '],
            [' ', 'f', 'b', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', '0']],
    player: [0, 4],
    buttons: [[1, 5]],
    source: [0, 4, 3],
    goal: [2, 1, 1]
});
