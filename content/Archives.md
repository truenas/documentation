---
title: "Documentation Archives"
---

Welcome to the TrueNAS Documentation Archive!

{{< hint warning >}}
All documentation provided here is End of Life (EoL) and no longer receives **any** updates.
{{< /hint >}}

{{< columns >}}

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">TrueNAS (Unified)</button>
  <div id="myDropdown" class="dropdown-content">
    <a href=".">Coming Soon!</a>
  </div>
</div>
<hr>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Legacy TrueNAS</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="https://www.ixsystems.com/documentation/truenas/11.3-U5/TrueNAS-11.3-U5-User-Guide_screen.pdf">11.3</a>
    <a href="https://www.ixsystems.com/documentation/truenas/11.2-U8-legacy/TrueNAS-11.2-U8-Legacy-User-Guide_screen.pdf">11.2</a>
    <a href="https://www.ixsystems.com/documentation/truenas/11.1/TrueNAS.pdf">11.1</a>
  </div>
</div>
<hr>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Legacy FreeNAS</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="https://www.ixsystems.com/documentation/freenas/11.3-U5/FreeNAS-11.3-U5-User-Guide_screen.pdf">11.3</a>
    <a href="https://www.ixsystems.com/documentation/freenas/11.2-U8/FreeNAS-11.2-U8-User-Guide_screen.pdf">11.2 (New GUI)</a>
    <a href="https://www.ixsystems.com/documentation/freenas/11.2-U8-legacy/FreeNAS-11.2-U8-Legacy-User-Guide_screen.pdf">11.2 (Legacy GUI)</a>
    <a href="https://www.ixsystems.com/documentation/freenas/11.1/FreeNAS.pdf">11.1</a>
    <a href="https://www.ixsystems.com/documentation/freenas/9.10/freenas.html">9.10</a>
    <a href="https://www.ixsystems.com/documentation/freenas/9.3/freenas.html">9.3</a>
    <a href="https://www.ixsystems.com/documentation/freenas/9.2.1/freenas9.2.1_guide.pdf">9.2</a>
    <a href="https://www.ixsystems.com/documentation/freenas/9.1.1/freenas9.1.1_guide.pdf">9.1</a>
    <a href="https://www.ixsystems.com/documentation/freenas/8.3.1/freenas8.3.1_guide.pdf">8.3</a>
    <a href="https://www.ixsystems.com/documentation/freenas/8.2/freenas8.2_guide.pdf">8.2</a>
    <a href="https://www.ixsystems.com/documentation/freenas/8.0.3/freenas8.0.3_guide.pdf">8.0</a>
  </div>
</div>

<--->

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">TrueCommand</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="https://www.ixsystems.com/documentation/truecommand/1.2/TrueCommand-Guide-1.2_screen.pdf">1.2</a>
    <a href="https://www.ixsystems.com/documentation/truecommand/1.1/TrueCommand-Guide-1.1_screen.pdf">1.1</a>
    <a href="https://www.ixsystems.com/documentation/truecommand/1.0/TrueCommand-Guide-1.0-RELEASE.pdf">1.0</a>
  </div>
</div>

<--->

## TrueNAS SCALE

Archives coming soon!

<--->

## vCenter Plugin

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">vCenter Plugin</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="https://www.google.com">1.2</a>
    <a href="#"></a>
    <a href="#"></a>
  </div>
</div>

{{< /columns >}}

<script>
// Get all drop-down buttons
const dropDownButtons = document.querySelectorAll(".dropbtn");
// Get all drop down content elements.
const dropDownContent = document.querySelectorAll(".dropdown-content");


function handleClick(event) {
  const main = event.target; // Use the event.target, the clicked element
  const className = "show"; // Spcecify the class name one time
  let myContent = null; // The drop down contents of the clicked item, if found
  dropDownContent.forEach( elem => {
    // Kludge: using parentNode since the clicked element is in it's own div.
    // It would probably be better if the querySelector above selected
    // the li-element, and then remove paretNode from the next statement.
    if ( main.parentNode.contains(elem)) {
      myContent = elem;
    } else {
      // Remove the class from every content except the clicked one.
      elem.classList.remove(className);
    }
  });
  // If the clicked have content, toggle if it is shown or not.
  if (myContent) myContent.classList.toggle(className);
}

dropDownButtons.forEach( elem => elem.addEventListener("click",  handleClick));
</script>