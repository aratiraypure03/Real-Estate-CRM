
// generate QR Code
function generateQRCode() {
  var text = document.getElementById("url").value;
  var qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Clear previous QR code
  new QRCode(qrcodeContainer, {text:text, width:200, height:200});

  if(text==""){
    alert("Enter URL please!", "danger");
    return;
  }

  document.getElementById("downloadbtn").style.display="";
}

// download QR code
function downloadQRCode() {
  var qrcodeContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];
  var link = document.createElement("a");
  link.href = qrcodeContainer.src;
  link.download = "qrcode.png";
  link.click();
}

// bootstrap alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
  `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  `   <div>${message}</div>`,
  '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  '</div>'
].join('')

alertPlaceholder.append(wrapper)
}


function addContact(type){

let sms = document.createElement("div");
sms.innerHTML=`<div class="input-group mb-3">
                    <span>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>${type}</option>
                      </select>
                    </span>
                    <input type="text" class="form-control" placeholder="${type}" aria-label="Username"
                      aria-describedby="basic-addon1" />
                      <span class="position-absolute translate-middle badge badge-center rounded-pill"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg></span>
                  </div>`;

let span = sms.getElementsByTagName("span")[1];
span.onclick = ()=>{
    sms.remove();
};
let contactDiv = document.getElementById("contactDiv");

contactDiv.appendChild(sms);
console.log(type);
}

function deleteContact(t){
  let c = document.getElementById(t);
  c.remove();
}


// image section functionalities:-

let DVCImage = document.getElementById('image-section-img');
let deleteImg = document.getElementById('trash-img');

function deleteImage(currElement)
{
console.log(currElement.previousElementSibling.children[0]);
currElement.previousElementSibling.remove();
currElement.remove();
}

// Product Sections:-

function addProduct(c)
{
let ProductAccordianBody = document.getElementById(`Product-accordian-body${c}`);
let productContainer = document.createElement('div');
productContainer.innerHTML = `<hr/>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Upload Product Image:</label>
                  </div>

                  <div class="mb-3">
                    <span class="image-profile-photo">
                      <div class="image-photo">
                        <img src="./images/oneplus9-1-500x500.webp" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                      <label for="prod_uplaod">
                        <div class="download-photo">
                          <box-icon name='upload'></box-icon>
                        </div>
                      </label>
                      <input type="file" name="" id="prod_uplaod" style="display: none;">
                    </span>
                  </div>

                  <div class="mb-3 col-lg-6 col-md-12 col-sm-12">
                    <label for="exampleFormControlInput1" class="form-label">Product Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Name" />
                  </div>

                  <label class="form-label text-secondary">Product Information:</label>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 1:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 2:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features(Place it Empty if you have Not Enough Features)" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Feature 3:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Product Features(Place it Empty if you have Not Enough Features)" />
                  </div>

                  <div class="mb-4 row">
                    <label for="html5-number-input" class="col-md-0 col-form-label">Product Price:</label>
                    <div class="col-md-4">
                      <input class="form-control" type="number" value="" placeholder="Enter only Numbers" id="html5-number-input" />
                    </div>
                  </div>`;

console.log(ProductAccordianBody);
console.log(productContainer);
ProductAccordianBody.appendChild(productContainer);
}

// Team Section Functionalities


function addTeamMember(c)
{
let teamAccordianBody = document.getElementById(`team-accordian-body${c}`);
let teamContainer = document.createElement('div');
teamContainer.innerHTML = `<hr/><div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Title" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Description"></textarea>
                  </div>
  
                  <p>Profile (250x250px, 1:1 Ratio)</p>
                  <span class="image-profile-photo" for="link_upload">
                    <div class="image-photo">
                        <img src="./images/pexels-italo-melo-881954-2379004.jpg" height="64px" width="64px">
                      </div>
                      <div class="delete-box" onclick="deleteImage(this)">
                        <i class="bi bi-trash3" style="color:red"></i>
                      </div>
                    <label for="team_upload">
                    <div class="download-photo">
                      <box-icon name='upload'></box-icon>
                    </div>
                    </label>
                    <input type="file" id="team_upload" style="display: none;">
                  </span>
                     <br>
                    <div class="row  mt-10 last-container">
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Name" aria-label="First name">
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="" class="form-label">Designation</label>
                        <input type="text" class="form-control" placeholder="Designation" aria-label="Last name">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Description"></textarea>
                    </div>`;
 console.log(teamAccordianBody);
 console.log(teamContainer);
 teamAccordianBody.appendChild(teamContainer);
}

// Social Links Functionalities

function addSocialLink(t){
let my_social_link = document.getElementById("my_social_link");
let slDiv = document.createElement("div");
slDiv.innerHTML = `<div class="py-3">
                  <div class="input-group mb-3">
                    <span>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>${t}</option>
                      </select>
                    </span>
                    <input type="text" class="form-control" placeholder="URL" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                  <span class="image-profile-photo" for="profile_upload">
                    <div class="image-photo">
                      <img src="./images/${t} png.png" height="64px" width="80px">
                    </div>
                    <label for="${t}_upload">
                      <div class="download-photo">
                        <box-icon name='upload'></box-icon>
                      </div>
                    </label>
                    <input type="file" name="" id="${t}_upload" style="display: none;">
                  </span>
      
                 <div class="input-group py-2">
                  <div class="me-3 col-sm-12 col-md-12 col-lg-5">
                    <label for="exampleFormControlInput2" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="${t}">
                  </div>
  
                  <div class="col-sm-12 col-md-12 col-lg-6">
                    <!-- <label for="exampleFormControlInput2" class="form-label">Subtitle</label> -->
                    <div class="profile-photo d-flex align-items-center">
                      <label for="exampleFormControlInput2" class="form-label">SUBTITLE</label>
                      <div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                      </div>
                   </div>
                    
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Follow us on ${t}">
                  </div>
                </div>
                </div>`;
my_social_link.appendChild(slDiv);
}

count = 0;

let homeAccordion = document.getElementById("home_accordion");


function addWhatsApp() {
  count++;
  let whatsappAccordionDiv = document.createElement("div");
  whatsappAccordionDiv.innerHTML = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="whatsapp${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#whatsappCollapse${count}" aria-expanded="false" aria-controls="whatsappCollapse${count}">
                  <div class="btn-container">
                      <span class="d-flex align-items-center"><i class="bi bi-whatsapp"></i>&nbsp;WhatsApp Contact</span>
                      <div class="form-check form-switch mb-2">
                          <input class="form-check-input" type="checkbox" id="whatsappSwitch${count}" checked />
                          <label class="form-check-label" for="whatsappSwitch${count}"></label>
                      </div>
                  </div>
              </button>
          </h2>
          <div id="whatsappCollapse${count}" class="accordion-collapse collapse" aria-labelledby="whatsapp${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                  <div id="whatsapp-accordion-body${count}">
                      <div class="mb-3">
                          <label for="whatsappNumber${count}" class="form-label">WhatsApp Number:</label>
                          <input type="text" class="form-control" id="whatsappNumber${count}" placeholder="Enter WhatsApp Number" />
                      </div>
                      <div class="mb-3">
                          <label for="whatsappName${count}" class="form-label">Contact Name:</label>
                          <input type="text" class="form-control" id="whatsappName${count}" placeholder="Enter Contact Name" />
                      </div>
                      <div class="mb-3">
                          <label for="whatsappMessage${count}" class="form-label">Message:</label>
                          <textarea class="form-control" id="whatsappMessage${count}" rows="3" placeholder="Add a Message"></textarea>
                      </div>
                  </div>
                  <button type="button" class="btn btn-primary" onclick="addWhatsApp()">Add New WhatsApp Contact</button>
              </div>
          </div>
      </div>`;
  
  homeAccordion.appendChild(whatsappAccordionDiv);
}

function addEmail() {
  count++;
  let emailAccordionDiv = document.createElement("div");
  emailAccordionDiv.innerHTML = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="email${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#emailCollapse${count}" aria-expanded="false" aria-controls="emailCollapse${count}">
                  <div class="btn-container">
                      <span class="d-flex align-items-center"><i class="bi bi-envelope"></i>&nbsp;Email Contact</span>
                      <div class="form-check form-switch mb-2">
                          <input class="form-check-input" type="checkbox" id="emailSwitch${count}" checked />
                          <label class="form-check-label" for="emailSwitch${count}"></label>
                      </div>
                  </div>
              </button>
          </h2>
          <div id="emailCollapse${count}" class="accordion-collapse collapse" aria-labelledby="email${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                  <div id="email-accordion-body${count}">
                      <div class="mb-3">
                          <label for="emailAddress${count}" class="form-label">Email Address:</label>
                          <input type="email" class="form-control" id="emailAddress${count}" placeholder="Enter Email Address" />
                      </div>
                      <div class="mb-3">
                          <label for="emailName${count}" class="form-label">Contact Name:</label>
                          <input type="text" class="form-control" id="emailName${count}" placeholder="Enter Contact Name" />
                      </div>
                      <div class="mb-3">
                          <label for="emailSubject${count}" class="form-label">Subject:</label>
                          <input type="text" class="form-control" id="emailSubject${count}" placeholder="Enter Subject" />
                      </div>
                      <div class="mb-3">
                          <label for="emailMessage${count}" class="form-label">Message:</label>
                          <textarea class="form-control" id="emailMessage${count}" rows="3" placeholder="Enter Message"></textarea>
                      </div>
                  </div>
                  <button type="button" class="btn btn-primary" onclick="addEmail()">Add New Email Contact</button>
              </div>
          </div>
      </div>`;

  homeAccordion.appendChild(emailAccordionDiv);
}

function addTelephone() {
  count++;
  let telephoneAccordionDiv = document.createElement("div");
  telephoneAccordionDiv.innerHTML = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="tel${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#telCollapse${count}" aria-expanded="false" aria-controls="telCollapse${count}">
                  <div class="btn-container">
                      <span class="d-flex align-items-center"><i class="bi bi-telephone"></i>&nbsp;Telephone Contact</span>
                      <div class="form-check form-switch mb-2">
                          <input class="form-check-input" type="checkbox" id="telephoneSwitch${count}" checked />
                          <label class="form-check-label" for="telephoneSwitch${count}"></label>
                      </div>
                  </div>
              </button>
          </h2>
          <div id="telCollapse${count}" class="accordion-collapse collapse" aria-labelledby="tel${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                  <div id="telephone-accordion-body${count}">
                      <div class="mb-3">
                          <label for="telephoneNumber${count}" class="form-label">Telephone Number:</label>
                          <input type="tel" class="form-control" id="telephoneNumber${count}" placeholder="Enter Telephone Number" />
                      </div>
                      <div class="mb-3">
                          <label for="telephoneName${count}" class="form-label">Contact Name:</label>
                          <input type="text" class="form-control" id="telephoneName${count}" placeholder="Enter Contact Name" />
                      </div>
                      <div class="mb-3">
                          <label for="telephoneDescription${count}" class="form-label">Description:</label>
                          <textarea class="form-control" id="telephoneDescription${count}" rows="3" placeholder="Enter Description"></textarea>
                      </div>
                  </div>
                  <button type="button" class="btn btn-primary" onclick="addTelephone()">Add New Telephone Contact</button>
              </div>
          </div>
      </div>`;

  homeAccordion.appendChild(telephoneAccordionDiv);
}

function addMobile() {
  count++;
  let mobileAccordionDiv = document.createElement("div");
  mobileAccordionDiv.innerHTML = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="mob${count}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#mobCollapse${count}" aria-expanded="false" aria-controls="mobCollapse${count}">
                  <div class="btn-container">
                      <span class="d-flex align-items-center"><i class="bi bi-phone"></i>&nbsp;Mobile Contact</span>
                      <div class="form-check form-switch mb-2">
                          <input class="form-check-input" type="checkbox" id="mobileSwitch${count}" checked />
                          <label class="form-check-label" for="mobileSwitch${count}"></label>
                      </div>
                  </div>
              </button>
          </h2>
          <div id="mobCollapse${count}" class="accordion-collapse collapse" aria-labelledby="mob${count}"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-3">
                  <div id="mobile-accordion-body${count}">
                      <div class="mb-3">
                          <label for="mobileNumber${count}" class="form-label">Mobile Number:</label>
                          <input type="tel" class="form-control" id="mobileNumber${count}" placeholder="Enter Mobile Number" />
                      </div>
                      <div class="mb-3">
                          <label for="mobileName${count}" class="form-label">Contact Name:</label>
                          <input type="text" class="form-control" id="mobileName${count}" placeholder="Enter Contact Name" />
                      </div>
                      <div class="mb-3">
                          <label for="mobileDescription${count}" class="form-label">Description:</label>
                          <textarea class="form-control" id="mobileDescription${count}" rows="3" placeholder="Enter Description"></textarea>
                      </div>
                      <p>Profile (250x250px, 1:1 Ratio)</p>
                      <span class="image-profile-photo">
                          <div class="image-photo">
                              <img src="./images/placeholder-profile.jpg" height="64px" width="64px" />
                          </div>
                          <div class="delete-box" onclick="deleteImage(this)">
                              <i class="bi bi-trash3" style="color:red"></i>
                          </div>
                          <label for="mobileUpload${count}">
                              <div class="download-photo">
                                  <box-icon name='upload'></box-icon>
                              </div>
                          </label>
                          <input type="file" id="mobileUpload${count}" style="display: none;">
                      </span>
                      <br>
                      <div class="row mt-10 last-container">
                          <div class="col-sm-12 col-md-12 col-lg-6">
                              <label for="mobileNameField${count}" class="form-label">Name:</label>
                              <input type="text" class="form-control" id="mobileNameField${count}" placeholder="Name" />
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-6">
                              <label for="mobileDesignation${count}" class="form-label">Designation:</label>
                              <input type="text" class="form-control" id="mobileDesignation${count}" placeholder="Designation" />
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="mobileDescriptionField${count}" class="form-label">Description:</label>
                          <textarea class="form-control" id="mobileDescriptionField${count}" rows="3" placeholder="Description"></textarea>
                      </div>
                  </div>
                  <button class="btn btn-primary" onclick="addMobile()">Add Mobile Contact</button>
              </div>
          </div>
      </div>`;

  homeAccordion.appendChild(mobileAccordionDiv);
}

