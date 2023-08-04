let icon=document.getElementById('carticon')
let sidebar=document.getElementById('sidebar')
const  product=[
    { 
         id:0,
             image: './images/sleepover.jpg',
         title: 'THE SLEEPOVER',
        price: 500.00,
    },

    {
        id:1,
        image: './images/fish.jpg',
        title: 'THE BRAVEST FISH',
        price:600.00,
    },


    {
        id:2,
        image: './images/Ivy-Bean.jpg',
        title: 'IVY + BEAN ',
        price:200.00,
    },

    {
            id:3,
            image: './images/Unicorn-Island.jpg',
            title: 'UNICORN-ISLAND',
            price:1000.00,
    },
    {
        id:4,
        image: './images/newtot.jpg',
        title: 'THE NEW TOY',
        price: 850.00
    },

    {
        id:5,
        image: './images/magicbook.jpg',
        title: 'THE MAGIC WATER BOOK',
        price: 850.00
    },
];


function proceed() 
{
    alert("Proceed to payment");
}
const categories=[...new Set(product.map((item)=>  {return item}))]
    let i=0;
    document.getElementById('root').innerHTML= categories.map((item)=>
    {
        var{image,title,price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a) {
        let j=0;total=0;
        document.getElementById("count").innerHTML=cart.length;

        if(cart.length == 0){
            document.getElementById('cartItem').innerHTML="Your cart is Empty";
            document.getElementById("total").innerHTML="$ "+0+".00";

        }
        else{
            document.getElementById("cartItem").innerHTML= cart.map((items)=>
            {
                var{image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML= "$ " +total+ ".00"
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                     <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>")

                }).join('')
            }
        
            
            function incrementValue()
            {
                var value = parseInt(document.getElementById('number').value, 10);
                value = isNaN(value) ? 0 : value;
                if(value<10){
                    value++;
                        document.getElementById('number').value = value;
                }
            }
            function decrementValue()
            {
                var value = parseInt(document.getElementById('number').value, 10);
                value = isNaN(value) ? 0 : value;
                if(value>1){
                    value--;
                        document.getElementById('number').value = value;
                }
            
            }
    
        }
