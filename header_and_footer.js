// JQuery to get data json and generate header and footer info
$.getJSON('data.json').done((data) => {
  // Header generation
  $.each(data.header, (str) => {
    // Add URL and text
    $("#" + str).attr("href", data.header[str].href).html(data.header[str].txt);
  })

  // Add footer links with mailto
  $("#footer_1").html("President: <a href=\""+ data.footer.email1.mailto + "\">" + data.footer.email1.address + "</a>")
  $("#footer_2").html("GNH Mailing List: <a href=\"" + data.footer.email2.mailtow + "\">" + data.footer.email2.address +"</a>")
});