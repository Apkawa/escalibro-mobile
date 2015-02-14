'use strict';

var Books = {
    1: {
        id: 1,
        title: 'Музыкальная шкатулка',
        description: 'Время и место действия: Фландрия, начало 18 в.\
            История изобретения музыкальной шкатулки. \
            Зимней ночью на площади играла однинокая скрипка. \
            И неприкаянные души, очарованные дивной музыкой, летели на нее, как мотыльки на пламя, \
            забыв, что оно может опалить их хрупкие крылышки.',
        type: 'Рассказ',
        tags: ['Фэнтези', 'Сказка'],
        size: '36.4 kB',
        state: 'Завершено',
        stats: {
            views: 256,
            comments: 8
        },
        author: {
            id: 1,
            nickname: 'berdandi',
            name: 'Гольшанская Светлана'
        },

        site_url: 'https://escalibro.com/ru/poetry/book/read/27490_muzyikalnaya-shkatulka/'

    }
};


var Authors = {
    1: {
        id: 1,
        nickname: 'berdandi',
        name: 'Гольшанская Светлана',
        url: 'https://escalibro.com/ru/poetry/works/berdandi/',
        gender: 'F', // F, M, null
        rating: 475.6
    }
};


module.exports = {
    Authors: Authors,
    Books: Books
}
