import React from "react";

function ShopItemFunc(prop) {
    const { item } = prop;

    return React.createElement('div', { className: 'main-content' },
        React.createElement('h2', null, item.brand),
        React.createElement('h1', null, item.title),
        React.createElement('h3', null, item.description),
        React.createElement('div', { class: 'description' }, item.descriptionFull),
        React.createElement('div', { class: 'highlight-window mobile' },
            React.createElement('div', { className: 'highlight-overlay' })
        ),
        React.createElement('div', { className: 'divider' }),
        React.createElement('div', { className: 'purchase-info' },
            React.createElement('div', { className: 'price' }, item.currency, item.price.toFixed(2)),
            React.createElement('button', null, 'Добавить в корзину')
        ),
    )
}

export default ShopItemFunc;