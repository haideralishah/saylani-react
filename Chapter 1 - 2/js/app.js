

// ReactDOM.render(
//     React.createElement('h1', {title: 'hello world'}, 'Hello World'),
//     document.getElementById('container')
// );











// var helloworld = React.createElement('a', { title: 'hello world', href: 'https://www.google.com', target: '_blank' }, 'Abu Ubaida Bin Jarrah RZ');


// ReactDOM.render(
//     helloworld,
//     document.getElementById('container')
// );

































// var h1 = React.createElement('h1', null, 'Hello React World');
// var h2 = React.createElement('h2', null, 'Hello React World');

// ReactDOM.render(
//     React.createElement('div', null, h1, h2)
//     ,
// document.getElementById('container')
// );






















// class MyName extends React.Component {
//     render() {
//         return React.createElement('h1', null, this.props.customeName);
//     }
// }

// var mughal = React.createElement(MyName, { customeName: 'Mughal' });
// var haider = React.createElement(MyName, { customeName: 'haider' });

// ReactDOM.render(
//     React.createElement('div', null, mughal, haider),
//     document.getElementById('container')
// );

// let h1 = React.createElement('h1', null, 'Hello world!')
// class HelloWorld extends React.Component {
//     render() {
//         return React.createElement('div', null, h1, h1)
//     }
// }
// ReactDOM.render(
//     React.createElement(HelloWorld, null),
//     document.getElementById('container')
// )














class CustomeLink extends React.Component {
    render() {
        return React.createElement('a', { href: this.props.link }, this.props.linkText);
    }
}

var google = React.createElement(CustomeLink, { link: 'https://www.google.com', linkText: 'google jee' });
var facebook = React.createElement(CustomeLink, { link: 'https://www.facebook.com', linkText: 'facebook' });
var br = React.createElement('br');
ReactDOM.render(
    React.createElement('div', null, google, br, facebook),
    document.getElementById('container')
);