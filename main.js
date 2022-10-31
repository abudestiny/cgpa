function gradeCalc(e,t){if("A"===e)return 5*t;if("B"===e)return 4*t;if("C"===e)return 3*t;if("D"===e)return 2*t;if("F"===e)return 0*t}document.addEventListener("contextmenu",function(e){e.preventDefault()},!1);let counter=1;function addCourse(){let e=document.createElement("form");e.classList.add("add_new",`key-${counter}`);let t=`
  <div class="dive">
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="0">F</option>
      </select>  
      <p onclick="removeCourse()"><i class="fas fa-close"></i></p>
      <p onclick="addCourse()"><i class="fas fa-add"></i></p>
    </form>

    `;e.innerHTML=t,document.getElementById("course-wrapper").appendChild(e),counter++}function removeCourse(){document.querySelector("form.add_new").remove()}const reports=[];function calcCgpa(){let e=document.getElementById("cgpa-calc"),t=document.querySelectorAll("select.grade"),o=document.querySelectorAll("input.credit-units"),r=[],n=[],l=0;t.forEach(e=>{let t=e.options,o=e.selectedIndex,n=t[o],l=n.text.toUpperCase();r.push(l)}),console.log(r),o.forEach(e=>{let t=parseInt(e.value);l+=t,n.push(t)});let i=0;for(let u=0;u<n.length;u++)i+=gradeCalc(r[u],n[u]);let c=i/l;5==c||c>=4.5?e.textContent="Your CGPA is "+c.toFixed(2)+". You are currently in First Class":4.49==c||c>=3.5?e.textContent="Your CGPA is "+c.toFixed(2)+". You are currently in 2nd Class upper":3.49==c||c>=2.4?e.textContent="Your CGPA is "+c.toFixed(2)+". You are currently in 2nd Class lower":2.39==c||c>=1.5?e.textContent="Your CGPA is "+c.toFixed(2)+". You are currently in 3rd Class":1.49==c||c>=0?e.textContent="Your CGPA is "+c.toFixed(2):e.textContent=alert("Invalid Input")}