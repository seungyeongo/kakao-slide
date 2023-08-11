const $indicator = $('.slides-navgation>li');
const $container = $('.slides-container');

let nowIdx = 0;

const moveFn = function () {
	$container.animate({ left: -100 * nowIdx + '%' });

	$indicator.eq(nowIdx).addClass('on');
	$indicator.eq(nowIdx).siblings().removeClass('on');
};

$indicator.on('click', function (evt) {
	evt.preventDefault();

	nowIdx = $indicator.index(this);

	moveFn();
});

$('.slides-next').on('click', function (evt) {
	evt.preventDefault();

	$;

	if (nowIdx < $indicator.length - 1) {
		nowIdx++;
	} else {
		nowIdx = 0;
	}

	moveFn();
});

$('.slides-prev').on('click', function (evt) {
	evt.preventDefault();

	if (nowIdx > 0) {
		nowIdx--;
	} else {
		nowIdx = $indicator.length - 1;
	}

	moveFn();
});
