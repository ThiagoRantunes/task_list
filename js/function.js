const btn_add_task = document.getElementById("btn_add_task")
const input_task = document.getElementById("input_task")
const list_body = document.getElementById("list");
const mensage = document.getElementById("mensage");

let value_var = 0

function delet(val){
    const item_delete = document.getElementById(val)
    item_delete.remove()
}

btn_add_task.addEventListener("click", function() {


    if(input_task.value == "" || input_task.value == null || input_task.value == undefined){
        mensage.innerText = "Error Creating Task"
        mensage.style.color = "red"
        setTimeout(function(){
                        mensage.innerText = ""
        }, 3000)
    }else{
        list_body.innerHTML += `<div class="item" id='${value_var}'>
                        <div class="text_item">
                            ${input_task.value}
                        </div>
                        <div class="btn_item">
                            <button onclick='delet(${value_var})'>
                                <img src="img/lixeira.png">
                            </button>
                        </div>
                    </div>`
                    mensage.style.color = "rgb(0, 149, 255)"
                    mensage.innerText = "Task Created Successfully"
                    setTimeout(function(){
                        mensage.innerText = ""
                    }, 3000)
    }


    value_var += 1
});

