<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password --
          <!-- Store Data? Yes/No-->
          <form>
            <div class="form-group">
              <label for="exampleInputEmail">Namen</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                aria-describedby="fullname"
                placeholder="Enter fullname"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="Enter Email"
                placeholder="Enter Email"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Passwort</label>
              <input
                type="password"
                class="form-control"
                id="password"
                aria-describedby="Please enter your password here"
                placeholder="Please enter your password here"
              >
            </div>
            <div class="form-group">
              <label for="save">Store Data</label>
              <label for="Save">
                <input type="radio" id="male" value="Male" v-model="gender"> Ja
              </label>
              <label for="female">
                <input type="radio" id="female" value="Female" v-model="gender"> Nein
              </label>
            </div>
          </form>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:</p>
            <p>Mail:</p>
            <p>Password:</p>
            <p>Store in Database?:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
