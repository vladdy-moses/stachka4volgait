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

    myPlacemark = new ymaps.Placemark([54.6269, 39.6916], {
        hintContent: 'Рязань'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin1.png',
        iconImageSize: [43, 40],
        iconImageOffset: [-33, -40]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.1838, 45.1749], {
        hintContent: 'Саранск'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin2.png',
        iconImageSize: [43, 32],
        iconImageOffset: [-35, -31]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.78517, 56.04562], {
        hintContent: 'Уфа'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin3.png',
        iconImageSize: [57, 49],
        iconImageOffset: [-37, -48]
    });
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([54.31981650975, 48.405634621123], {
        hintContent: 'Стачка!',
        balloonContent: 'Здесь пройдёт Стачка 2014.'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin4.png',
        iconImageSize: [49, 55],
        iconImageOffset: [-28, -53]
    });
    myPlacemark.events.add('click', function () {
        $('#mapWrapper .poster').show();
    });
    myMap.geoObjects.add(myPlacemark);
}