block('slogan').content()(function() {
    return [
        {
            elem: 'inner',
            content: [
                {
                    elem: 'title',
                    content:
                        [
                            'Балансировочный коллектор',
                            {tag: 'br'},
                            'компактного исполнения',
                        ]
                },
                {
                    elem: 'subtitle',
                    content: 'Только у нас! Спешите заказать!',
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                    },
                    text: 'Сделать заказ'
                },
            ]
        },

        {
            elem: 'image',
            content: [
                {
                    block: 'image',
                    url: 'https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S',
                    title: 'Все подробности на bem.info'
                }
            ]
        },

    ];
});
