import { AuthService } from './../services/auth.service';

export class SignupComponent {
    constructor() {
        this._authService = new AuthService(); 
    }
    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
        <div class="auth-form col col-6 mx-auto my-auto">
            <h3>Sign up to Social.</h3>
            <p class="text-secondary">Enter your information to sign up your Social account.</p>
            <form name="signupForm">
                <div class="form-group">
                  <label for="signupForm">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">Enter your own email</small>
                </div>
                <div class="form-group">
                  <label for="signupForm">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="signupForm">Your nickName</label>
                    <input type="text" class="form-control" id="nickname" placeholder="nickName">
                </div>
                <div class="form-group">
                    <label for="signupForm">First Name</label>
                    <input type="text" class="form-control" id="first_name" placeholder="First name">
                </div>
                <div class="form-group">
                    <label for="signupForm">Last Name</label>
                    <input type="text" class="form-control" id="last_name" placeholder="Last name">
                </div>
                <div class="form-group">
                    <label for="signupForm">Phone Number</label>
                    <input type="text" class="form-control" id="phone" placeholder="Phone number">
                </div>
                <legend class="col-form-label ">Gender Orientation</legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input gender_orientation" type="radio" name="signupForm" id="gender_orientation_male" value="male" >
                    <label class="form-check-label" for="signupForm">
                      Male
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input gender_orientation" type="radio" name="signupForm" id="gender_orientation_female" value="female">
                    <label class="form-check-label" for="signupForm">
                      Female
                    </label>
                </div>
                <div class="form-group">
                    <label for="signupForm">City</label>
                    <input type="text" class="form-control" id="city" placeholder="City">
                </div>
                <div class="form-group">
                    <label for="signupForm">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="Country">
                </div>
                <div class="form-group">
                    <label for="signupForm">Date of Birthday day</label>
                    <input type="text" class="form-control" id="date_of_birth_day" placeholder="Date of Birthday day">
                </div>
                <div class="form-group">
                    <label for="signupForm">Date of Birthday month</label>
                    <input type="text" class="form-control" id="date_of_birth_month" placeholder="Date of Birthday month">
                </div>
                <div class="form-group">
                    <label for="signupForm">Date of Birthday year</label>
                    <input type="text" class="form-control" id="date_of_birth_year" placeholder="Date of Birthday year">
                </div>
                <button type="submit" class="btn btn-primary btn-sm">Sign up</button>
              </form>
        </div>
        <!-- /.auth-form -->
        <div class="auth-bg col col-6">
        </div>
        <!-- /.auth-bg -->
    </div>
    <!-- /.auth-wrap -->
        `;
    }

    afterRender() {
        document.forms['signupForm'].addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;
            const nickname = e.target.elements['nickname'].value;
            const first_name = e.target.elements['first_name'].value;
            const last_name = e.target.elements['last_name'].value;
            const phone = e.target.elements['phone'].value;
            const gender_orientation = document.querySelector('input[type="radio"]:checked').value;
            const city = e.target.elements['city'].value;
            const country = e.target.elements['country'].value;
            const date_of_birth_day = e.target.elements['date_of_birth_day'].value;
            const date_of_birth_month = e.target.elements['date_of_birth_month'].value;
            const date_of_birth_year = e.target.elements['date_of_birth_year'].value;

            if (!email || !password || !nickname || !phone) return;
            this._authService.signup(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });                
        });
    }
}

