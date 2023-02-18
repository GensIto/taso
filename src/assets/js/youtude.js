export const youtude = (id) => {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var ytArea = 'youtube-movie-body';

  function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
      videoId: id,
      playerVars: {
        rel: 0,
        controls: 0,
        showinfo: 0,
        wmode: 'transparent'
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  }

  function onPlayerReady(e) {
    ytPlayer.playVideo();
    ytPlayer.mute();
  }

  function onPlayerStateChange(e) {
    var ytStatus = e.target.getPlayerState();
    if (ytStatus == YT.PlayerState.ENDED) {
      ytPlayer.playVideo();
      ytPlayer.mute();
    }
  }
};
