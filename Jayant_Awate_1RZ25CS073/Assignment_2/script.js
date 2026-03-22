const task_name=document.getElementById("task_name");
const add_btn=document.getElementById("add-btn");
const task_lists=document.getElementById("task-lists");

add_btn.addEventListener("click",()=>{
      let task=task_name.value;
      let to_do=document.createElement("div");
      to_do.className="task";
      to_do.innerHTML=`<div class="task">
                              <span>${task}</span>
                              <button class="btn" >Done</button>
                        </div>`;
      to_do.querySelector(".btn").addEventListener("click",()=>{
                        to_do.remove();
      })
      task_lists.append(to_do);
      task_name.value="";
});