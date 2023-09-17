
const logBtn = document.getElementById("logBtn");

logBtn.onclick = () => {
  document.location.href = "./indexone.html";
};


const WorkingName = document.getElementById("whatt");
const WorkingTime = document.getElementById("Whenn");
const Duration = document.getElementById("duretion");
const add = document.getElementById("add");
const jobList = document.getElementById("jobList");






let Job = [];

const addJobToList = () => {
  const nameOne = WorkingName.value;
  const nameTwo = WorkingTime.value;
  const nameThree = Duration.value;



  if (
    nameOne !== "" &&
    nameTwo !== "" &&
    nameThree !== "" 
   
  ) {
    const NewJob= {
      namea: nameOne,
      nameb: nameTwo,
      namec: nameThree,
      
    };

    Job.push(NewJob);

    WorkingName.value = "";
    WorkingTime.value = "";
    
    Duration.value = "";


    list();
    console.log(NewJob);
  }
};

const list = () => {
  jobList.innerHTML = "";
  for (const product of Job) {
    const div = document.createElement("div");
    div.innerText = `Working Name:${product.namea} 
    Working Time:${product.nameb}
    Duration:${product.namec} `
    jobList.appendChild(div);
  }
};

add.onclick = addJobToList;


  












