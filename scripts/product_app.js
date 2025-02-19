const PARAMS = new URLSearchParams(window.location.search);
const PRODUCT_NAME = PARAMS.get("name");

const PRODUCT_IMAGE = document.querySelector(".product-img img");
const PRODUCT_DETAILS = document.getElementsByClassName("product-details");
const AMOUNT_INPUT = document.querySelector(".amount-input");


if(PRODUCT_NAME == "green_tea")
{
    PRODUCT_IMAGE.src = "/images/products/green_tea.jpg";
}
else if(PRODUCT_NAME == "honeybush_tea")
{
    PRODUCT_IMAGE.src = "/images/products/honeybush_tea.jpg";
}

AMOUNT_INPUT.addEventListener("blur", () => {
    var amount = parseInt(AMOUNT_INPUT.value);

    if(amount > 999)
    {
        AMOUNT_INPUT.value = 999;
        AMOUNT_INPUT.setCustomValidity("Maximum amount is 999!");
        AMOUNT_INPUT.reportValidity();
    }
    else if (amount < 1 || isNaN(amount)) 
    {
        AMOUNT_INPUT.value = 1;
        AMOUNT_INPUT.setCustomValidity("Minimum amount is 1!");
        AMOUNT_INPUT.reportValidity();
    }
    else
    {
        AMOUNT_INPUT.setCustomValidity("");
    }
});

