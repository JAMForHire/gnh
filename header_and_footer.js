$.getJSON('data.json').done((data) => {
  $.each(data.header, (str) => {
    $("#" + str).attr("href", data.header[str].href).html(data.header[str].txt);
  })

  $("#footer_1").html("President: <a href=\""+ data.footer.email1.mailto + "\">" + data.footer.email1.address + "</a>")
  $("#footer_2").html("GNH Mailing List: <a href=\"" + data.footer.email2.mailtow + "\">" + data.footer.email2.address +"</a>")
});