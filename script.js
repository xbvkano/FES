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
const ID = new Login('1974', '1234');
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



// Non Document Functions

const PatientIsLogedIn = Patient => {
    if (Patient === true){
        document.querySelector("[data-BasicBackgroundQR]").classList.add('active');
        document.querySelector("[data-MuscleSettings]").classList.add('active');
        document.querySelector("[data-PatientLogedInOnly]").classList.remove('hidden');
        document.querySelector(".backgroundStyle.Patient").classList.add("hidden");
    }
}

const PatientLogOut = Patient => {
    if (Patient === true){
        document.querySelector("[data-BasicBackgroundQR]").classList.remove('active');
        document.querySelector("[data-MuscleSettings]").classList.remove('active');   
        
    }
    
}


// clinian part

const ClinicianIsLogedIn = Clinician => {
    if (Clinician === true){
        document.querySelector("[data-clinicianOptionDropdown").classList.remove("hidden");
        document.querySelector("[data-ConfigNoClinician]").classList.add("hidden");
        document.querySelector("[data-ConfigWithClinician]").classList.remove("hidden");
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
    IDRequireSage = true;
    console.log(IDRequireSage);
});

WithoutIdToggle.addEventListener('click', () => {
    document.querySelector("[data-WithoutIdCheck]").classList.add('active');
    document.querySelector("[data-WithIdCheck]").classList.remove('active');
    IDRequireSage = false;
    console.log(IDRequireSage);
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