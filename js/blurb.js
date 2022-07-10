$(document).ready(function() {
    var blurbs = [
        "chaeyoung <3",
        "caulk and bawlz",
        "read it in a new york accent.",
        "perhaps i am gay.",
        "Funk soul brother!",
        "BOYS! *uhh* BOYS!",
        "I was busy thinkin' bout BOYS",
        "Look mum, I'm in a blurb!",
        "Home-made !"
    ];
    var x = Math.floor((Math.random() * blurbs.length));
    $('#blurb').html(blurbs[x]);
});