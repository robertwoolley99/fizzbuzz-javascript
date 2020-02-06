function FizzBuzz() {
}

FizzBuzz.prototype.fizzbuzz = function(input) {
  if (input % 3 === 0){
    return 'Fizz'
  } else if  (input === 5){
      return 'Buzz'
  } else {
  return input };
};

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
