// jQuery to handle button click actions
$(document).ready(function () {
  $("#view-products").click(function () {
    alert("Redirecting to products page...");
    // Add actual redirection code here (e.g., window.location.href = '/products')
  });

  $("#find-banker").click(function () {
    alert("Redirecting to find a banker...");
    // Add actual redirection code here (e.g., window.location.href = '/find-banker')
  });

  $(".card-btn").click(function () {
    alert("More information about this service...");
    // Add actual redirection code here (e.g., window.location.href = '/more-info')
  });

  $(".cta-btn").click(function () {
    alert("Redirecting to the respective page...");
  });
});
