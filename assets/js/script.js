// javascript code for the <header>
const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <a href="index.html"><h1>Site Name</h1></a>
        <div class="search">
        <input type="text" placeholder="Search for..." id="searchbar" onkeyup="search_animal()" name="search">
            <button class="btn">Search</button>
        </div>
    </header>
    `;
}

createHeader();

// javascript code for the <nav>
const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
    <div class="dropdown">
    <button class="dropbtn">Category</button>
    <div class="dropdown-content">
      <a href="product.html">Product</a>
      <a href="product.html">Product</a>
      <a href="product.html">Product</a>
      <a href="product.html">Product</a>
    </div>
  </div>

  <div class="dropdown">
  <button class="dropbtn">Category</button>
  <div class="dropdown-content">
    <a href="product.html">Product</a>
    <a href="product.html">Product</a>
    <a href="product.html">Product</a>
    <a href="product.html">Product</a>
  </div>
</div>

<div class="dropdown">
<button class="dropbtn">Category</button>
<div class="dropdown-content">
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
</div>
</div>

<div class="dropdown">
<button class="dropbtn">Category</button>
<div class="dropdown-content">
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
</div>
</div>

<div class="dropdown">
<button class="dropbtn">Category</button>
<div class="dropdown-content">
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
</div>
</div>

<div class="dropdown">
<button class="dropbtn">Category</button>
<div class="dropdown-content">
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
  <a href="product.html">Product</a>
</div>
</div>
</nav>
    `;
}

createNav();

// javascript code for the <footer>
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
        <div class="row">
            <div class="col-3">
                <h3>Mailing Address</h3>
                <p>123 Street Name</p>
                <p>City, State, Zip Code</p>
                <p>Tel: (800) 455-4356</p>
                <p>Fax: (323) 546-5456</p>
                <p>info@sitename.com</p>
            </div>
            <div class="col-3">
                <h3>Quick Links</h3>
                <p>Place an Order</p>
                <p>FAQ</p>
                <p>Return Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <div class="col-3">
                <h3>Follow Us</h3>
                <p>Facebook</p>
                <p>Instagram</p>
            </div>
        </div>
    </footer>
    `;
}

createFooter();

// javascript code for the search input
const createOl = () => {
  let ol = document.querySelector('ol');

  ol.innerHTML = `
  <ol id='list'> 
        <a href="#"><li class="pages">Page 1</li></a>
    </ol> 
  `;
}

createOl();


// JavaScript search code 
function search_animal() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('pages'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 