let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}


// This is a segment from the HTML and pasted over here just to understand
/* <div class="container" onmouseenter="console.log('container ke andar mouse gaya')"
onclick="console.log('container me click hua')">
<button onclick="alert('hello'); let a = 6; console.log(a)">Click me</button>
</div>
<script src="script.js"></script> */