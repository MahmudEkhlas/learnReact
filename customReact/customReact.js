
function customrender(reactele, contain) {
    /*const domele = document.createElement(reactele.type);
    domele.innerHTML = reactele.Children;
    domele.setAttribute('href', reactele.props.href);
    domele.setAttribute('target', reactele.props.target);
    contain.appendChild(domele);*/
    const domele = document.createElement(reactele.type);
    domele.innerHTML = reactele.Children;
    for (const prop in reactele.props) {
       if(prop == 'Children') continue;
       domele.setAttribute(prop, reactele.props[prop]);
    }
    contain.appendChild(domele);
}
const reactele = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click Me to visit Google'
}

const contain = document.querySelector('#root');

customrender(reactele, contain);