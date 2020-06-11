function resetTables(timeOut) {

  setTimeout(() => {
    getTable().columns.adjust();
    getTable().draw();
    getTable2().columns.adjust();
    getTable2().draw();
    getTable3().columns.adjust();
    getTable3().draw();
    getTable4().columns.adjust();
    getTable4().draw();
    getTable5().columns.adjust();
    getTable5().draw();
  }, timeOut);
}
$(document).ready(() => {
  var rateTable = $("#rateTable").DataTable({
    searching: false,
    lengthChange: false,
    info: false,
    scrollX: false,
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-left"></i>',
        previous: '<i class="fas fa-chevron-right"></i>',
      },
    },
    ordering: false,
    columnDefs: [
      { "width": "200px", "targets": [1,2] }
    ],
    "paging": false
  });
 
  var groupColumn = 0;
  var mainRevisionTable = $("#mainRevisionTable").DataTable({
    searching: false,
    lengthChange: false,
    info: false,
    columnDefs: [
      {"visible": false, "targets": [groupColumn] },
      { "width": "50%", "targets": [2] },
      { "width": "10px", "targets": [1] }
    ],
    "order": [[ groupColumn, 'asc' ]],
    ordering: false,
    "paging": false,
    "drawCallback": function ( settings ) {
      var api = this.api();
      var rows = api.rows( {page:'current'} ).nodes();
      var last=null;

      api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
          if ( last !== group ) {
              $(rows).eq( i ).before(
                  `<tr class="group"><td colspan="3">${group}</td>
                  <td>
                  <table class="no-border"><tr>
                  <td class="child">
                  الدرجة العظمى
                  <span>(5)</span>
                  </td>
                  <td class="child">
                  الدرجة الخاصة بك 
                  <span>(2)</span>
                  </td>
                 </tr></table>
             
                  </td></tr>`
              );

              last = group;
          }
      } );}
  });
  var categTable =$("#categTable").DataTable({
    searching: false,
    lengthChange: false,
    info: false,
    scrollX: false,
    language: {
      paginate: {
        next: '<i class="fas fa-chevron-left"></i>',
        previous: '<i class="fas fa-chevron-right"></i>',
      },
    },
    ordering: false,
    columnDefs: [
      { "width": "50%", "targets": [0] }
    ],
    "paging": false
  });
  var categMain = $("#categMain").DataTable({
    searching: false,
    lengthChange: false,
    info: false,
    columnDefs: [
      {"visible": false, "targets": [groupColumn] },
      { "width": "50%", "targets": [2] },
      { "width": "10px", "targets": [1] }
    ],
    "order": [[ groupColumn, 'asc' ]],
    ordering: false,
    "paging": false,
    "drawCallback": function ( settings ) {
      var api = this.api();
      var rows = api.rows( {page:'current'} ).nodes();
      var last=null;

      api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
          if ( last !== group ) {
              $(rows).eq( i ).before(
                  `<tr class="group"><td colspan="3">${group}</td>
                  <td>
                  <table class="no-border"><tr>
                  <td class="child">
                  الدرجة العظمى
                  <span>(5)</span>
                  </td>
                  <td class="child">
                  الدرجة الخاصة بك 
                  <span>(2)</span>
                  </td>
                 </tr></table>
             
                  </td></tr>`
              );

              last = group;
          }
      } );}
  });
  var reviewTable=$("#reviewTable").DataTable({
    searching: false,
    lengthChange: false,
    info: false,
    scrollX: false,
    ordering: false,
    columnDefs: [
      { "width": "25%", "targets": [0] }
    ],
    "paging": false
  });
  getTable = () => rateTable;
  getTable2 = () => mainRevisionTable;
  getTable3 = () => categTable;
  getTable4 = () => categMain;
  getTable5 = () => reviewTable;
  $('.main-container').scroll(function() {
   console.log( $("#mainRevisionTable").scrollTop());
   
  });
  $("#slide-toggle").click(function () {
    resetTables(300);
  });
  $(".nav-link").click(function () {
    resetTables(200);
  });
  $(".process-btn").click(function () {
    resetTables(300);
  });

  resetTables(300);
});
