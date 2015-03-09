$(function() {
    ymaps.ready(init);
});

var myMap,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.81981650975, 48.405634621123],
        zoom: 6,
        controls: ['zoomControl']
    });

    /* placemarks */
    myPlacemark = new ymaps.Placemark([54.6269, 39.6916], {
        hintContent: 'Рязань'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'content/pin1.png',
        iconImageSize: [43, 40],
        iconImageOffset: [-33, -40]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.1838, 45.1749], {
        hintContent: 'Саранск'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'content/pin2.png',
        iconImageSize: [43, 32],
        iconImageOffset: [-35, -31]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.78517, 56.04562], {
        hintContent: 'Уфа'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'content/pin3.png',
        iconImageSize: [57, 49],
        iconImageOffset: [-37, -48]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.31981650975, 48.405634621123], {
        hintContent: 'Здесь пройдёт Стачка 2014.'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'content/pin4.png',
        iconImageSize: [49, 55],
        iconImageOffset: [-28, -53]
    });
    myMap.geoObjects.add(myPlacemark);

    /* click events */
    myPlacemark.events.add('click', stachkaMarkerClick);
    myMap.geoObjects.events.add('click', mapClick);
    myMap.events.add('click', mapClick);

    /* disable zoom on scroll */
    myMap.behaviors.disable('scrollZoom');
}

stachkaMarkerClick = function(e) {
    $('#mapWrapper .poster').removeClass("hide");
    e.stopPropagation();
};

mapClick = function () {
    $('#mapWrapper .poster').addClass("hide");
};