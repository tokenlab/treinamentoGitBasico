class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
    this.state = 'STOPPED';
  }
  play(){
    console.log('Playing '+this.currentSong);
  }
  //TODO: Add Pause()
  pause(){
    console.log('Paused');
  }

  //TODO: Add Stop()
  stop(){
    console.log('Stopped');
  }

  add(song){
    this.playlist.push(song);
  }
}
