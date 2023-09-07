function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// $(function() {
//   var recommendation_account_check = false;
//   var waypoint = new Waypoint({
//     element: document.getElementById('recommendation_waypoint'),
//     handler: function(direction) {
//       if (direction == 'down' && !recommendation_account_check) {
//         recommendation_account_check = true;
//         attachLoggedInAccountTooltips(["5f0cbd05498ef90036861a5f", "60a9b95a976a2300405bc66e", "5c17ccc692514132c30c68df", "63c9ae8f68afd6007c7115cf", "5447badb0e0a2672da002622", "5590ddde925141758c00022d", "6167280dbe7f35006ac5bf37", "5e2f8f9d98f1f10012fd62b1", "64cbe3374fd14100e9682fbf", "64cbf0304fd14100e9683355", "64cbdf15706e5600c9a0ab8f", "5ea74ac2426ae80021482757", "613a9325e272600063455943", "4bc8b545017a3c122d060125", "614cdb3b1cac8c002a2357f1", "4e58628f7b9aa1590d000088", "635892b331644b007f6f7003", "552f008192514130f3003a85", "62e53367eb64f1005e40326b", "5f700af1dff66e00399dd316"], 'U.Z', '64d53002b6c2641154f7dc98', 'Add to your favorite list', 'Add to your watchlist', 'Remove from your favorite list', 'Remove from your watchlist');
//         enableLoggedInAccountTooltipActions('movie', 'U.Z', 'Add to your favorite list', 'Add to your watchlist', 'Remove from your favorite list', 'Remove from your watchlist');
//       }
//     },
//     offset: '100%'
//   });
// });

var recommendation_waypoint_check = false;
new Waypoint({
  element: document.getElementById('recommendation_waypoint'),
  handler: function (direction) {
    if (direction == 'down' && !recommendation_waypoint_check) {
      $.ajax({
        url: kendo.format('/{0}/{1}/remote/recommendations', 'movie', '976573-elemental'),
        type: 'GET',
        data: {
          version: 1,
          translate: false
        }
      }).done(function (response) {
        recommendation_waypoint_check = true;
        $('#recommendation_waypoint').html(response).hide().fadeIn(1000);
        initializeScroller(false, '#recommendation_scroller');
        observer.observe();
      });
    }
  },
  offset: '100%'
});
