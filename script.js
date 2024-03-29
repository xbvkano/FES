class Login{
    constructor(ID, password){
        this.ID = ID;
        this.password = password;
        this.IDLogin = "";
        this.passwordLogin = "";
        this.repeat = "";
        this.ClinicianID = "1776";
        this.ClinicianLogin = "";
        this.LoggedIn = false;
        this.clinicianLoggedIn = false;
    }
    // below are the getters and setters
    getID(){
        return this.ID;
    }

    getIDLogin(){
        return this.IDLogin;
    }

    getPassword(){
        return this.password;
    }

    getPasswordLogin(){
        return this.passwordLogin;
    }

    // Above getters and setters

    verifyID(){
        if(this.ID == this.IDLogin){
            return true;
        }
        else{
            return false;
        }
    }

    verifyPassword(){
        if(this.password == this.passwordLogin){
            return true;
        }
        else{
            return false;
        }
    }

    verifyClinician(){
        if(this.ClinicianID == this.ClinicianLogin){
            return true;
        }
        else{
            return false;
        }
    }

    clear(){
        this.IDLogin = '';
        this.passwordLogin = '';
        this.repeat = "";
        this.ClinicianLogin = "";
    }
    
    PatientLogIn(){
        this.LoggedIn = true;
    }
    PatientLogOut(){
        this.LoggedIn = false;
    }

    ClinicianLogIn(){
        this.clinicianLoggedIn = true;
    }

    ClinicianLogOut(){
        this.clinicianLoggedIn = false;
    }

    IsClinicianLogIn(){
        console.log(`Clinician ${this.clinicianLoggedIn}`);
        return this.clinicianLoggedIn;
    }

    IsPatientLogIn(){
        return this.LoggedIn;
    }



    addID(IDNumber){
        this.IDLogin += IDNumber;
        return this.IDLogin;
    }
    addPassword(passwordNumber){
        this.passwordLogin += passwordNumber;
        return this.passwordLogin;
    }

    addClinician(ClinicianNumber){
        this.ClinicianLogin += ClinicianNumber;
        return this.ClinicianLogin;
    }


    updateDisplay(test){
        if (test == "[data-PasswordDisplay]"){
            if (this.passwordLogin.length > 0){
                this.repeat += "•";
            }
            document.querySelector(test).innerHTML =  this.repeat;
        }
        else if (test == "[data-IdDisplay]"){
            document.querySelector(test).innerHTML = this.IDLogin;
        }
        else if (test == "[data-ClinicianDisplay]"){
            if (this.ClinicianLogin.length > 0){
                this.repeat += "•";
            }
            if (Unmask.checked){
                document.querySelector(test).innerHTML =  this.ClinicianLogin;
            }
            else {
                document.querySelector(test).innerHTML =  this.repeat;
            }
        }
        else if (test == "all"){
            document.querySelector("[data-PasswordDisplay]").innerHTML = this.repeat;
            document.querySelector("[data-IdDisplay]").innerHTML = this.IDLogin;
            document.querySelector("[data-ClinicianDisplay]").innerHTML = this.repeat;
        }
    }
};


// Creationg of variables
const ID = new Login('89101', '701');
const NumberButtons = document.querySelectorAll('[data-number]');

const SubmitIDForVerify = document.querySelector('[data-SubmitID]');
const SubmitPasswordForVerify = document.querySelector('[data-SubmitPassword]');
const SubmitClinicianForVerify = document.querySelector('[data-SubmitClinician]');

const ClearButton = document.querySelectorAll('[data-clear]');
const PatientLogin = document.querySelector('[data-PatientLogin]');
const ClinicianLogin = document.querySelector('[data-ClinicianLogin]');
const Unmask = document.querySelector('[data-Unmask]');

const ExitButtonsWrongID = document.querySelectorAll('[data-wrongIDExit]');

const WithIdToggle = document.querySelector('[data-WithId]');
const WithoutIdToggle = document.querySelector('[data-WithoutId]');
document.querySelector("[data-WithIdCheck]").classList.add('active');
let IDRequireSage = true;

const CloseButtonDropdown = document.querySelectorAll('[data-closeButtonDropDown]');

// variables for the muscle selectinf process
const MuscleSelect = document.querySelector('[data-MuscleSelect]');
const radioButtons = document.getElementsByName("ChoiceOfMuscle");
const MuscleAllCheckbox = document.querySelectorAll(".AllCheckbox");
const MuscleRadio = document.querySelectorAll(".RadioChoice");
// Non Document Functions

// Background Image
const backgroundImage = document.getElementById("BackgrounBodyImage");
const ApplyButton = document.querySelector("[data-apply]");
let muscleChoice;
// Background Animation Video
const GoButton = document.getElementById("Go");
const videoCanvas = document.querySelector("[data-videoAnimation]");


// Login out
const ButtonLogOutPatient = document.querySelector("[data-LogOutPatient]");
// PatientLogin disable 

const ButtonLogOutClinician = document.querySelector("[data-LogOutClinician");
const LogOutClinicianButoon = document.querySelector("[data-ClinicianLogOut]");


// const WithIdToggle = document.querySelector('[data-WithId]');
// const WithoutIdToggle = document.querySelector('[data-WithoutId]');



ButtonLogOutPatient.addEventListener('click', () => {
    PatientLogOut(false);
});

LogOutClinicianButoon.addEventListener('click', () => {
    ClinicianIsLogedOut(false);
});





const PatientIsLogedIn = Patient => {
    if (Patient === true){
        document.querySelector("[data-BasicBackgroundQR]").classList.add('active');
        document.querySelector("[data-MuscleSettings]").classList.add('active');
        document.querySelector("[data-PatientLogedInOnly]").classList.remove('hidden');
        document.querySelector(".backgroundStyle.Patient").classList.add("hidden");
        PatientLogin.classList.add('DisableButton');
        ButtonLogOutPatient.classList.remove('DisableButton');
    }
}

const PatientLogOut = Patient => {
    if (Patient === false){
        document.querySelector("[data-BasicBackgroundQR]").classList.remove('active');
        document.querySelector("[data-MuscleSettings]").classList.remove('active');
        document.querySelector("[data-PatientLogedInOnly]").classList.add('hidden');
        document.querySelector(".backgroundStyle.Patient").classList.remove("hidden");
        PatientLogin.classList.remove('DisableButton');
        ButtonLogOutPatient.classList.add('DisableButton');
    }
    
}


// clinian part

const ClinicianIsLogedIn = Clinician => {
    if (Clinician === true){
        document.querySelector("[data-clinicianOptionDropdown").classList.remove("hidden");
        document.querySelector("[data-ConfigNoClinician]").classList.add("hidden");
        document.querySelector("[data-ConfigWithClinician]").classList.remove("hidden");
        ClinicianLogin.classList.add('DisableButton');
        LogOutClinicianButoon.classList.remove('DisableButton');
    }
}

const ClinicianIsLogedOut = Clinician => {
    if (Clinician === false){
        document.querySelector("[data-clinicianOptionDropdown").classList.add("hidden");
        document.querySelector("[data-ConfigNoClinician]").classList.remove("hidden");
        document.querySelector("[data-ConfigWithClinician]").classList.add("hidden");
        ClinicianLogin.classList.remove('DisableButton');
        LogOutClinicianButoon.classList.add('DisableButton');
    }
}










// Document Functions
console.log('script.js');
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        ID.clear();
        ID.updateDisplay("all");
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        ID.clear();
        ID.updateDisplay("all");
    })
})



// Below are the event listeners

PatientLogin.addEventListener('click', () => {
    document.getElementById("IdRequirement").classList.add('active');
    document.getElementById("PatientTab").classList.remove('active');
});

ClinicianLogin.addEventListener('click', () => {
    document.getElementById("ClinicianRequirement").classList.add('active');
    document.getElementById("ClinicianTab").classList.remove('active');
});

WithIdToggle.addEventListener('click', () => {
    document.querySelector("[data-WithoutIdCheck]").classList.remove('active');
    document.querySelector("[data-WithIdCheck]").classList.add('active');
    PatientLogOut(false);
    IDRequireSage = true;
    console.log(IDRequireSage);
});

WithoutIdToggle.addEventListener('click', () => {
    document.querySelector("[data-WithoutIdCheck]").classList.add('active');
    document.querySelector("[data-WithIdCheck]").classList.remove('active');
    PatientIsLogedIn(true);
    ButtonLogOutPatient.classList.add('DisableButton');
    IDRequireSage = false;
    console.log(IDRequireSage);
});


CloseButtonDropdown.forEach(button => { 
    button.addEventListener('click', () => {
        let currentDropdown;
        currentDropdown = document.querySelector('[data-ConfigureDropDown]');
        currentDropdown.classList.remove('active');
    });
});

NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let PasswordOrId = document.getElementById("PasswordRequirement");
        let ClinicianOrPatient = document.getElementById("ClinicianRequirement");
        if (ClinicianOrPatient.classList.contains('active')){
            ID.addClinician(button.innerText.replace(/<br\s*[\/]?>/gi, "\n").split("\n")[0]); 
            ID.updateDisplay("[data-ClinicianDisplay]");
        }
        else if (PasswordOrId.classList.contains('active')){
            ID.addPassword(button.innerText.replace(/<br\s*[\/]?>/gi, "\n").split("\n")[0]); 
            console.log(ID.passwordLogin)
            ID.updateDisplay("[data-PasswordDisplay]");
        } else {
            ID.addID(button.innerText.replace(/<br\s*[\/]?>/gi, "\n").split("\n")[0]); 
            ID.updateDisplay("[data-IdDisplay]");
        }
        
        
    })
});



// Verifu ID and Passwords and Clinicians
SubmitIDForVerify.addEventListener('click', (e) => {
    if(ID.verifyID() == true){
        console.log('ID is correct');
        ID.clear();
        ID.updateDisplay("[data-IdDisplay]");
        ID.updateDisplay("[data-PasswordDisplay]");
        let currentDropdown;
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.remove('active');
        
        document.getElementById("PasswordRequirement").classList.add('active');
    }
    else{
        document.getElementById("WrongID").classList.add('active');
        ID.clear();
        ID.updateDisplay("[data-IdDisplay]");
    }
});

SubmitPasswordForVerify.addEventListener('click', (e) => {
    if(ID.verifyPassword() == true){
        console.log('Password is correct');
        ID.clear();
        ID.updateDisplay("[data-IdDisplay]");
        ID.updateDisplay("[data-PasswordDisplay]");
        let currentDropdown;
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.remove('active');
        // TODO: Add here the function for runing it based on a client
        ID.PatientLogIn();
        PatientIsLogedIn(ID.IsPatientLogIn());
        console.log("TEST")
        console.log(ID.IsPatientLogIn());
    }
    else{
        document.getElementById("WrongPIN").classList.add('active');
        ID.clear();
        ID.updateDisplay("[data-PasswordDisplay]");
    }
});

SubmitClinicianForVerify.addEventListener('click', (e) => {
    if(ID.verifyClinician() == true){
        ID.clear();
        ID.updateDisplay("all");
        let currentDropdown;
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.remove('active');
        ID.ClinicianLogIn();
        ClinicianIsLogedIn(ID.IsClinicianLogIn());
    }
    else{
        document.getElementById("WrongClinicianID").classList.add('active');
        ID.clear();
        ID.updateDisplay("all");
    }
});


ClearButton.forEach(button => {
    button.addEventListener('click', () => {
        ID.clear();
        ID.updateDisplay("all");
    });
});

Unmask.addEventListener('change', () => {
    if (Unmask.checked){
        document.querySelector("[data-ClinicianDisplay]").innerHTML =  ID.ClinicianLogin;
    }
    else {
        document.querySelector("[data-ClinicianDisplay]").innerHTML =  ID.repeat;
    }
});

ExitButtonsWrongID.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById("WrongID").classList.remove('active');
        document.getElementById("WrongPIN").classList.remove('active');
        document.getElementById("WrongClinicianID").classList.remove('active');
        ID.clear();
        ID.updateDisplay("all");
    });
});



MuscleSelect.addEventListener('change', () => {
    console.log(`Worked and value is ${MuscleSelect.value}`);
    if (MuscleSelect.value == "All"){
        // Loop through each radio button and set its checked property to true
        MuscleRadio.forEach((radio) => {
            radio.classList.add("hidden");
        });
        MuscleAllCheckbox.forEach(CheckBox => {
            CheckBox.classList.remove("hidden");
        });
        backgroundImage.src = `./Body With Pads/AllMuscles.png`;
    }
    else {
        MuscleRadio.forEach((radio) => {
            radio.classList.remove("hidden");
        });
        MuscleAllCheckbox.forEach(CheckBox => {
            CheckBox.classList.add("hidden");
        });
    }
});

ApplyButton.addEventListener('click', () => {
    if (!document.querySelector("[data-MuscleSettings]").classList.contains("active")){
        document.querySelector("[data-MuscleSettings]").classList.add('active');
        videoCanvas.classList.add("hidden");
        console.log("Worked")
    }

    if (MuscleSelect.value != "All"){
        MuscleRadio.forEach((radio) => {
            if (radio.checked){
                console.log(radio.value);
                muscleChoice = radio.value;
            }
        });
    } else {
        muscleChoice = "All";
    }

    console.log(muscleChoice);

    switch (muscleChoice) {
        case "All":
            backgroundImage.src = `./Body With Pads/AllMuscles.png`;
            break;

        case "TA":
            backgroundImage.src = `./Body With Pads/TAs.png`;
            break;


        case "GAS":
            backgroundImage.src = `./Body With Pads/GAS.png`;
            break;

        case "QUAD":
            backgroundImage.src = `./Body With Pads/Quads.png`;
            break;

        case "HAM":
            backgroundImage.src = `./Body With Pads/HamStrings.png`;
            break; 

        case "GLUT":
            backgroundImage.src = `./Body With Pads/Gluts.png`;
            break;

        case "ERECT":
            backgroundImage.src = `./Body With Pads/ErectSpinae.png`;
            break;

        default:
            backgroundImage.src = "https://media.istockphoto.com/id/459951679/photo/male-anatomy-view.jpg?s=612x612&w=0&k=20&c=-T2Zk12yDJgrF3T2XPz80ThaC_vZKh-s7qCYQwXNAXA=";
            break;
    }   

    
});


GoButton.addEventListener('click', () => {
    document.querySelector("[data-MuscleSettings]").classList.remove('active');
    switch (muscleChoice) {
        case "All":
            videoCanvas.src = `./Vid/All.mp4`;
            break;

        case "TA":
            videoCanvas.src = `./Vid/TaAndGas.mp4`;
            break;


        case "GAS":
            videoCanvas.src = `./Vid/Gas.mp4`;
            break;

        case "QUAD":
            videoCanvas.src = `./Vid/Quad.mp4`;
            break;

        case "HAM":
            videoCanvas.src = `./Vid/HamAndQuad.mp4`;
            break; 

        case "GLUT":
            videoCanvas.src = `./Vid/Gluteous maximumm.mp4`;
            break;

        case "ERECT":
            videoCanvas.src = `./Vid/Erect.mp4`;
            break;

        default:
            videoCanvas.src = "./Vid/All.mp4";
            break;
    }   




    videoCanvas.classList.remove("hidden");
});