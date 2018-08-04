// map
window.initMap = function () {
    const melbourne = {
        lat: -37.815302,
        lng: 144.865231
    };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: melbourne,
        zoom: 12,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f5f5',
                }, ],
            },
            {
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off',
                }, ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161',
                }, ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f5f5f5',
                }, ],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bdbdbd',
                }, ],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee',
                }, ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575',
                }, ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5',
                }, ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e',
                }, ],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff',
                }, ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575',
                }, ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#dadada',
                }, ],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161',
                }, ],
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e',
                }, ],
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5',
                }, ],
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee',
                }, ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#c9c9c9',
                }, ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e',
                }, ],
            },
        ],
    });
    const marker = new google.maps.Marker({
        position: {
            lat: -37.81503,
            lng: 144.960331,
        },
        map: map,
    });
}

//carousell flickity

const element = document.querySelector('.clients-carousel');
const flkty = new Flickity(element, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: false
})

// hamburger menu

const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('close')) {
        hamburger.classList.remove('close');
        mainNav.classList.remove('open');
    } else {
        hamburger.classList.add('close');
        mainNav.classList.add('open');
    }
})

//PRTOJECTS FILTER

const tabBtns = document.querySelectorAll('.tab-button');
const cells = document.querySelectorAll('.cell');

tabBtns.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        const attribute = event.target.getAttribute('href');

        cells.forEach(function(elem){
            if (attribute === 'all'){
                elem.classList.add('visible');
            } else if (elem.getAttribute('data-category') === attribute){
                elem.classList.add('visible');
            } else {
                elem.classList.remove('visible');
            }
        })

    });
});
// sprawdza data-category i porównuje z hrefem jeśli jest takie samo to daje klase visible jesli nie to odejmuje klase visible
// all = po wszystkich daje klase visible 

// z kolejcji cell wybrać te których atrybut data jest taki jak attribute