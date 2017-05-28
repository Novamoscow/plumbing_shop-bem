block('header').content()(function() {
    return [
        {
            block: 'logo',
        },
        {
            block: 'menu',
            mods: {
                theme: 'islands',
                size: 'l',
                focused : true

            },
            content: [
                {
                    elem: 'item',
                    val: 1,
                    content: 'Главная'
                },
                {
                    elem: 'item',
                    val: 1,
                    content: 'Каталог'
                },
                {
                    elem: 'item',
                    val: 1,
                    content: 'Доставка'
                },
                {
                    elem: 'item',
                    val: 1,
                    content: 'Оплата'
                },
                {
                    elem: 'item',
                    val: 1,
                    content: 'Отзывы'
                },
            ]
        },
        {
            elem: 'contacts',

        },
    ];
});
