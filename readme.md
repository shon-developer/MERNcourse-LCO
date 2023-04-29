## create schema methods

- models/user.js

```js
userSchema.virtual("password");
.set(function(password){
    this.password = password
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
})
.get(function)(){
    return this._password
}

userSchema.method = {
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac(`sha256`, this.salt)
        .update(plainpassword)
        .digest(`hex`);
    } catch (err) {
      return "";
    }
  },
};

module.export = mongoose.model("User", userSchema);
```

## create virtual field

- we have renamed our password to `encry_password` that is what we are storing in our database.
- models/user.js

```js
  encry_password: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
```

- we need to create another field through the virtual which can be simply called as the `password`. But actually what is going to be stored in the database is `encry_Password`.
- to create setter, we expect somebody give a password, because while setting it up we want to use the method `securePassword` which basically require us to pass on the plain password in the `set(function(password))`.

```js
userSchema.virtual(password);
.set(function(password){})
.get()
```

- next is to keep the password the we get from the user be stored in a variable so `this.password is goint to be 'password'`
- the convention of using a private variable is '\_'

```js
this._password = password;
// password is new stored securely in another variable to deffer it later on
```

-to populate the salt field which we already have declared

```js
this.salt = uuidv1();
```

- we need to set one more field `the encry_password`

```js
this.encry_password = this.securePassword(password);
```

- now what if somebody wants to take the things back?
  let create getter

```js
userSchema
  .virtual(password)
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1;
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });
```
