var posts = [
    {
        id: 1,
        title: "Product A",
        image: "/Asm/image/Rectangle 163 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action: "Update",
       
    },
    {
        id: 2,
        title: "Product A",
        image: "/Asm/image/Rectangle 164 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action: "Update",
       
    },
    {
        id: 3,
        title: "Product A",
        image: "/Asm/image/Rectangle 163 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action: "Update",
       
    },
    {
        id: 4,
        title: "Product A",
        image: "/Asm/image/Rectangle 164 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action: "Update",
        action: "Delete"
    },
    {
        id: 5,
        title: "Product A",
        image: "/Asm/image/Rectangle 163 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action: "Update",
       
    },
    {
        id: 6,
        title: "Product A",
        image: "/Asm/image/Rectangle 164 (1).png",
        year: 2022,
        articleDes: "Product Description",
        action1: "Update",
    },
    {
        id: 7,
        title: "Designing Dashboards",
        image: "/Asm/image/Rectangle 30 (1).png",
        year: 2022,
        articleDes: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        action1: "Update",
    },
    {
        id: 8,
        title: "Vibrant Portraits of 2020",
        image: "/Asm/image/Rectangle 32 (4).png",
        year: 2022,
        articleDes: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        action1: "Update",
    },
    {
        id: 9,
        title: "36 Days of Malayalam type",
        image: "/Asm/image/Rectangle 34.png",
        year: 2022,
        articleDes: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        action1: "Update",
    },
]

var tbody_one = document.querySelector("#tbody-one");
for(item of posts){
    tbody_one.innerHTML += `
    <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td><img class="ml-28 my-4 object-cover w-[100px] h-[100px]" src="${item.image}"</td>
        <td>${item.year}</td>
        <td>${item.articleDes}</td>
        <td><button id="UpdateProduct" class="U" type="submit" ${item.action1}/>Update
        <button id="DeleteProduct" class="D" type="submit"  ${item.action1}/>Delete
        </td>
    </tr>
    `
}

var form_add_product = document.querySelector("#form-add-product");
var btn_product = document.querySelector("#btn-product");
var idd_product = document.querySelector("#input-id");
var title = document.querySelector("#title");
var input_title = document.querySelector("#input-title");
var image = document.querySelector("#imagee");
var input_image = document.querySelector("#input-image");
var year = document.querySelector("#yearr");
var input_year = document.querySelector("#input-year");
var description = document.querySelector("#description");
var input_des = document.querySelector("#input-des");
var close = document.querySelector("#close");
var addProduct = document.querySelector("#add");
var tbody_two = document.querySelector("#tbody-two");

btn_product.addEventListener("click", function() {
    form_add_product.style.display = "block";
});

close.addEventListener("click", function(e) {
    e.preventDefault();
    form_add_product.style.display = "none";
});

var posts2 = [];

// Add product
addProduct.addEventListener("click", function(e) {
    e.preventDefault();
    tbody_two.innerHTML = "";
    var newProduct = {
        iddProduct : idd_product.value,
        titleProduct : input_title.value,
        imageProduct : input_image.value,
        yearProduct : input_year.value,
        descriptionProduct : input_des.value,   
    };
    posts2.push(newProduct);

    for(item of posts2) {
        tbody_two.innerHTML += `
    <tr>
        <td>${item.iddProduct}</td>
        <td>${item.titleProduct}</td>
        <td><image class="ml-28 my-4 object-cover w-[100px] h-[100px]" src="${item.imageProduct}"/></td>
        <td>${item.yearProduct}</td>
        <td>${item.descriptionProduct}</td>
        <td><button id="UpdateProduct" class="U" type="submit" ${item.action1}/>Update
        <button id="DeleteProduct" class="D" type="submit" ${item.action1}/>Delete
        </td>
    </tr>
        `
    } 
});

var updateProduct = document.querySelectorAll("#UpdateProduct");
var deleteProduct = document.querySelectorAll("#DeleteProduct");

// Delete Product
deleteProduct.forEach(element => {
    element.addEventListener("click", function (e) {
        
    })
});
    /*
    thêm sửa xóa ở vị trí bất kỳ bằng hàm splice
    hàm này nhận vào 3 tham số
    tham số 1: vị trí muốn thêm, sửa hoặc xóa dữ liệu
    tham số 2: 
    nếu thêm mới (k xóa đi dữ liệu gì) thì để là 0
    nếu xóa đi bao nhiêu phần tử thì để vào giá trị đó
    tham số 3: giá trị cần thêm mới (hoặc cập nhật);
    */  









