import * as types from './../constants/ActionTypes';

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.nguyenkimmall.com/images/companies/_1/Content/tin-tuc/gia-dung/top-10-smartphone-gia-re-khong-nen-bo-lo-trong-nam-2020-h2.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory : 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung 8 Plus',
        image: 'https://vtv1.mediacdn.vn/thumb_w/650/2021/1/29/iphone-12-pro-2-16119099637851062241406.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory : 14,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZob0Sv8S8H4Wd6mnQMykDhQLcVgiKTcjLxg&usqp=CAU',
        description : 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory : 100,
        rating: 1
    }
];

const products = (state=initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default products;