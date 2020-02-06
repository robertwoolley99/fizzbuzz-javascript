describe("FizzBuzz", function() {
  var result;

  beforeEach(function() {
    result = new FizzBuzz();
  });

  it("should return the number if not divisible by 5 or 3", function() {
    expect(result.fizzbuzz(2)).toEqual(2);
  });
  it("should return Fizz if the number is divisible by 3", function(){
    expect(result.fizzbuzz(3)).toEqual('Fizz');
  });
  it("should return Buzz if the number is divisible by 5", function(){
    expect(result.fizzbuzz(5)).toEqual('Buzz');
  });
  it ("should return Fizz if the number is 6", function(){
    expect(result.fizzbuzz(6)).toEqual('Fizz');
  });
  it("should return Buzz if the number is 10", function(){
    expect(result.fizzbuzz(10)).toEqual('Buzz');
  });
  it("should return FizzBuzz if the number is divisible by 3 and 5", function(){
    expect(result.fizzbuzz(15)).toEqual('FizzBuzz')
  });


  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
