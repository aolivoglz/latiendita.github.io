$('.Popup').click(function() {
  // Will be applied to all in class
});

$( document ).ready( function() {
  $("a[rel='pop-up']").click(function () {
    var caracteristicas = "height=700,width=800,scrollTo,resizable=1,scrollbars=1,location=0";
    nueva = window.open(this.href, 'Popup', caracteristicas);
    return false;
  });
});

$( document ).ready( function() {
  $("#myModal").modal('show');
});

$('#mypopup').on('show.bs.modal', function (e) {
      var anchorTag = e.relatedTarget; // reference to the element that trigger modal popup in your case anchar tag
      url = $(anchorTag).attr("href");
      $.ajax({
          url: url,
          type: 'GET',
          dataType: 'html'
      })
      .always(function(responseData) {
          $("#mypopup .modal-content").html(responseData);
      });
});
