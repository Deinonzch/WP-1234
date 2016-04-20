var app = angular.module('app', []);

app.controller('drinkiCTRL', function ($scope, $http) {
    var app = this;
    app.drinki = [
        {nazwa: 'Adios Motherfucker (AMF) ', skadniki: 'wodka (15ml), rum (15ml), tequila (15ml), gin (15ml), ' +
        'likier blue curacao (15 ml), sweet and sour mix (60 ml), sprite lub 7-Up (60 ml), kostki lodu',
            przygotowanie: 'dodac kostki lodu do szklanki, wlac skladniki do szklanki highball, delikatnie wymieszac'},
        {nazwa: 'Black Magic', skadniki: 'wodka (50 ml),likier kawowy (50 ml), sok z cytryny (kilka kropel), kostki lodu',
            przygotowanie: 'dodac kostki lodu do szklanki, wlac skladniki do szklanki, wymieszac'},
        {nazwa: 'Sonic Screwdriver', skadniki: 'wodka (40ml, likier blue curacao (40ml), sok pomaranczowy (240ml), kostki lodu',
            przygotowanie: 'dodac kostki lodu do szklanki, wlac skladniki do szklanki, wymieszac'},
        {nazwa: 'Kamikaze (Kamikadze)', skadniki: 'wodka (30 ml), triple sec (30 ml), sok z limonki (30 ml), kostki lodu',
            przygotowanie: 'dodac kostki lodu do shakera, wlac skladniki do shakera, wstrzasnac, przez sitko wlac do kieliszka'},
        {nazwa: 'Niebieskie Kamikadze (Blue Kamikaze)', skadniki: 'wodka (50 ml), likier blue curacao (50 ml), sok z cytryny (50 ml), kostki lodu',
            przygotowanie: 'dodac kostki lodu do shakera, wlac skladniki do shakera, wstrzasnac, przez sitko wlac do kieliszka'},
        {nazwa: 'Tequila Sunrise', skadniki: '    tequila (50 ml), sok pomaranczowy (150 ml), grenadina (25 ml), kostki lodu',
            przygotowanie: 'dodac kostki lodu do polowy szklanki, wlac tequila i sok pomoranczowy do szklanki, wlac po woli grendina do szklanki'}

    ];

});