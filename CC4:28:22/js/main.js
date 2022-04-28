//This did not work

function findShort(s){
    //probably need to split words into individual strings
    //filter through words and find shortest string
    let shortest = Math.min(...s.split('').map(word => word.length));
    //join words back to one string? this may be unecessary
    //return the shortest word
    return shortest;
  }


//But these did

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }


function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }