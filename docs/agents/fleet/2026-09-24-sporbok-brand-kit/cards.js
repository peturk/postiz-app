/*
 * Job-card lettering, shared by the stage (video.html) and the text layer
 * (overlay.html). Lettering is marked .t: clean keyframes hide it and the text
 * layer draws it over the generated picture, so no model ever redraws a letter.
 */
window.SB_CARDS = {
  notan: '<div class="t" style="font:500 26px IBM Plex Mono,monospace;letter-spacing:.08em;color:#56616E">VERK</div>'
    + '<div class="t" style="font-size:56px;letter-spacing:-1px;margin-top:6px">Hafnarstræti 12</div>'
    + '<div class="t" style="font-size:34px;color:#56616E;font-weight:600;margin-top:4px">Pípulögn · baðherbergi</div>'
    + '<div class="bar" style="height:10px;border-radius:5px;background:#C5CBD2;margin-top:26px;width:160px"></div>',
  tvo: function (title, sub) {
    return '<div class="t" style="font:500 24px IBM Plex Mono,monospace;letter-spacing:.08em;color:#56616E">VERK</div>'
      + '<div class="t" style="font-size:46px;letter-spacing:-1px;margin-top:6px">' + title + '</div>'
      + '<div class="t" style="font-size:30px;color:#56616E;font-weight:600;margin-top:4px">' + sub + '</div>'
      + '<div class="bar" style="height:10px;border-radius:5px;background:#C5CBD2;margin-top:22px;width:130px"></div>';
  }
};
