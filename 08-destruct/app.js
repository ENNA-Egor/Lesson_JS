//////////////Массивы


function getInfo() {
    return ['BMW', 'X3'];
}

const [carName, carSeries] = getInfo();

console.log('carName  ' +carName, 'carSeries  '+ carSeries);

/////////////////////////////////////////Объекты

const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

const {
    target,
    className,
    children: {
        span: {
            content, className: renamed,
        }
    }
} = link || {};

console.log(target, className, content, renamed);