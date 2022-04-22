var food_list = [];

function searchButtonClick(){
    let food_name = document.getElementById('food_name').value.trim();
    (food_name != "") && getFoodbyName(food_name);
}

function getFoodbyName(food_name){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`)
    .then(response => response.json())
    .then(data => displayAllFood(data));
}

function displayAllFood(data){
    food_list = data.meals;

    document.getElementById("display_all_food_info").innerHTML="";
    let outerDiv = document.getElementById("display_all_food_info");
    
    let arrLength = 0;
    if(data.meals.length>=5){
        arrLength = 5;
    }else{
        arrLength = data.meals.length;
    }
    for(let i=0; i<arrLength; i++){
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 
        `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    Food Information
                </div>
                <div class="col-lg-4">
                    Meal ID
                </div>
                <div class="col-lg-8">
                    ${data.meals[i].idMeal}
                </div>
                <div class="col-lg-4">
                    Meal Name
                </div>
                <div class="col-lg-8">
                    ${data.meals[i].strMeal}
                </div>
                <div class="col-lg-4">
                    Meal Image
                </div>
                <div class="col-lg-8">
                    <img src="${data.meals[i].strMealThumb}" alt="Image not found." width="250px" />
                </div>
                <div class="col-lg-4">
                    Meal Title
                </div>
                <div class="col-lg-8">
                    ${data.meals[i].strMeal}
                </div>
                <div class="col-lg-4">
                    Cooking Instruction
                </div>
                <div class="col-lg-8">
                    ${(data.meals[i].strYoutube=="") ? `<span>Link not found.</span>` : `<a href="${data.meals[i].strYoutube}">${data.meals[i].strYoutube}</a>`}
                </div>
            </div>
        </div>`;
        newDiv.style="display: flex; justify-content: center; background: #42f2f5; padding: 50px 0";


        outerDiv.appendChild(newDiv);
    }

    if(data.meals.length>5){
        let outerDiv2 = document.getElementById("show_all");
        let newbuttonDiv = document.createElement('div');
        newbuttonDiv.innerHTML = 
            `<div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <button class="custom_button_2_2" onclick="showAllFood()">Show All</button>
                    </div>
                </div>
            </div>`;
        newbuttonDiv.style="display: flex; justify-content: center; background: #42f2f5; padding: 10px";
        outerDiv2.appendChild(newbuttonDiv);
    }
}

function showAllFood(){
    document.getElementById("show_all").innerHTML="";
    let outerDiv = document.getElementById("display_all_food_info");
    
    for(let i=5; i<food_list.length; i++){
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 
        `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    Food Information
                </div>
                <div class="col-lg-4">
                    Meal ID
                </div>
                <div class="col-lg-8">
                    ${food_list[i].idMeal}
                </div>
                <div class="col-lg-4">
                    Meal Name
                </div>
                <div class="col-lg-8">
                    ${food_list[i].strMeal}
                </div>
                <div class="col-lg-4">
                    Meal Image
                </div>
                <div class="col-lg-8">
                    <img src="${food_list[i].strMealThumb}" alt="Image not found." width="250px" />
                </div>
                <div class="col-lg-4">
                    Meal Title
                </div>
                <div class="col-lg-8">
                    ${food_list[i].strMeal}
                </div>
                <div class="col-lg-4">
                    Cooking Instruction
                </div>
                <div class="col-lg-8">
                    ${(food_list.strYoutube=="") ? `<span>Link not found.</span>` : `<a href="${food_list[i].strYoutube}">${food_list.strYoutube}</a>`}
                </div>
            </div>
        </div>`;
        newDiv.style="display: flex; justify-content: center; background: #42f2f5; padding: 50px 0";


        outerDiv.appendChild(newDiv);
    }
}