var myData = [
    {
        name: "Air Jordan 1 High Travis Scott",
        category_name: "Giày Nike",
        price: 4529,
        sale_price: 3999,
        image: "../image/travis_scott.jpg",
    },
    {
        name: "Yeezy Boost 700 Wave Runner",
        category_name: "Giày Adidas",
        price: 497,
        sale_price: 419,
        image: "../image/yeezy_700.jpg",
    },
    {
        name: "Air Force 1 Low G-Dragon-White",
        category_name: "Giày Nike",
        price: 804,
        sale_price: 699,
        image: "../image/gd.jpg",
    },
    {
        name: "Run Star Motion",
        category_name: "Giày Converse",
        price: 178,
        sale_price: 159,
        image: "../image/runstar_motion.jpg",
    },
    {
        name: "Old Skool Flame",
        category_name: "Giày Vans",
        price: 99,
        sale_price: 99,
        image: "../image/flame.jpg",
    },
    {
        name: "Triple S Red Blue",
        category_name: "Giày Balenciaga",
        price: 980,
        sale_price: 959,
        image: "../image/trips.jpg",
    },
];
function myDatas() {
    return [
        {
            name: "Air Jordan 1 High Travis Scott",
            category_name: "Giày Nike",
            price: 4529,
            sale_price: 3999,
            image: "../image/travis_scott.jpg",
        },
        {
            name: "Yeezy Boost 700 Wave Runner",
            category_name: "Giày Adidas",
            price: 497,
            sale_price: 419,
            image: "../image/yeezy_700.jpg",
        },
        {
            name: "Air Force 1 Low G-Dragon-White",
            category_name: "Giày Nike",
            price: 804,
            sale_price: 699,
            image: "../image/gd.jpg",
        },
        {
            name: "Run Star Motion",
            category_name: "Giày Converse",
            price: 178,
            sale_price: 159,
            image: "../image/runstar_motion.jpg",
        },
        {
            name: "Old Skool Flame",
            category_name: "Giày Vans",
            price: 99,
            sale_price: 99,
            image: "../image/flame.jpg",
        },
        {
            name: "Triple S Red Blue",
            category_name: "Giày Balenciaga",
            price: 980,
            sale_price: 959,
            image: "../image/trips.jpg",
        },
    ];
}
;
var showProductList = function (data) {
    var _html = '';
    for (let key of data) {
        _html += `
            <tr>
                <th scope="row">${key.name}</th>
                <td>${key.category_name}</td>
                <td><del>${key.price}</del></td>
                <td>${key.sale_price}</td>
                <td><img src="${key.image}"/></td>
            </tr>
        `;
    }
    var _bodyList = document.getElementById("tbody-list");
    _bodyList.innerHTML = _html;
};
showProductList(myData);
var input_cate = document.getElementById('input_cate');
var btn_filter_cate = document.getElementById('btn');
btn_filter_cate.onclick = function () {
    let myData = myDatas();
    let cates = input_cate.value;
    if (cates == '') {
        alert('Vui lòng nhập danh mục sản phẩm');
        return;
    }
    let ProductFilter = myData.filter(function (obj) {
        return cates == obj.category_name;
    });
    showProductList(ProductFilter);
};
var sort_Price = (sort_type) => {
    let myData = myDatas();
    if (sort_type == 'ASC') {
        let priceSort = myData.sort(function (a, b) {
            return a.price < b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else if (sort_type == 'DESC') {
        let priceSort = myData.sort(function (a, b) {
            return a.price > b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else {
        showProductList(myData);
        return;
    }
};
var input_min = document.getElementById("input_min");
var input_max = document.getElementById("input_max");
var btn_price = document.getElementById('btn_price');
btn_price.onclick = function () {
    let min = input_min.value;
    let max = input_max.value;
    if (min == '' || max == '') {
        alert('Vui lòng nhập khoảng giá');
        return;
    }
    let Filter = myData.filter(function (obj) {
        return min <= obj.sale_price && obj.sale_price <= max;
    });
    showProductList(Filter);
};
