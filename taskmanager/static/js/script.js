document.addEventListener("DOMContentLoaded", function () {
    // Sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Datepicker initialization
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialization
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // collapsible initialization
    let collapse = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapse);
});
