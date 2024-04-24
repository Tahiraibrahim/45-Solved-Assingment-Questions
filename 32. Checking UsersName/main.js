var current_users = ["Saima", "FahMida", "Admin", "FaIza", "Kainat"];
var new_users = ["Hameed", "IbrAhim", "FahMida", "SalaHuddin", "Admin"];
new_users.forEach(function (new_users) {
    var lowerCause = new_users.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCause)) {
        console.log("The username ".concat(new_users, " is not available. Please write a different username"));
    }
    else {
        console.log("The username ".concat(new_users, " is available"));
    }
});
