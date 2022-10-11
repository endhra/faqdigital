  var module_61535413057 = (function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
$('.taber-content:first-child').addClass('active');
$(window).load(function(){
  $(".request-quote .taber-content").on('click',function(){
    $(".request-quote .taber-content").removeClass('active');
    $(this).addClass('active');
  });
});

/*====Taber Js Code Start Here=======*/

$(document).ready(function() {
  let info = $('.request-quote .right-column .taber-details');
  $('.request-quote .taber-content').click(function(e) {
    var index = $(this).index();
    info.hide();
    info.eq(index).fadeIn(300);
    $('.nav').removeClass('current');
    $(this).addClass('current');
    return false;
  });

});


/*====== File Type Upload Styling JS Code ======*/


jQuery(document).ready(function() {
  var token;
  var initForm = function() {
    token = null;
    if ($(".hs_cos_wrapper_type_form:not(:has(form))").length) {
      token = setTimeout(initForm, 1000);
    }
    $("form:not(.file-upload-init)").addClass("file-upload-init").find("input[type=file]").each(function() {
      var o = $(this);
      o.wrap("<label class='file-upload'/>");
      o.css("display", "block");
      var fileName = $("<span class='file-upload-file-name'/>").insertAfter(o);
      $("<span class='file-upload-button-label'>Choose a file...</span>").insertAfter(fileName);
      o.change(function() {
        var fullPath = this.value;
        if (fullPath) {
          fileName.text(fullPath.split(/(\\|\/)/g).pop());
        }
      });
    });
  };
  initForm();
  $(window).on("load", function() {
    setTimeout(function() {
      if (token) {
        clearTimeout(token);
        token = null;
      }
    }, 5000);
  });
});

$(function(){
  /*=== CheckBox JS Code ===*/
  setTimeout(function(){
    $('.hs_how_can_we_help_you_ input[type="checkbox"]').click(function(){
      $(this).closest('.hs-form-checkbox').toggleClass('active')
    }); 

    $("#calendy").on("load", function() {
      let head = $("#calendy").contents().find("head");
      let css = '<style>.page:not(.embedded){background:transparent!important;}.page:not(.embedded).meetings-lib,.page:not(.embedded).meetings-lib>div>div{margin:0!important;}.page:not(.embedded).meetings-lib>div>div{max-width:100%;}</div></style>';
      $(head).append(css);
      
    });
  },1000)
});

/*====== Step Form JS Code Start Here ======*/

jQuery(document).ready(function() {
  var containers = $(".step-form-container");
  containers.slice(1).hide();
  $("<iframe name='dummyform'/>").appendTo("body").hide();
  containers.slice(0, containers.length - 1).find('.hs_cos_wrapper_type_form').on('hsvalidatedsubmit', '.hs-form', function (e) {
    $(this).attr("target", "dummyform");
    var curContainer = $(this).closest(".step-form-container");
    var nextForm = curContainer.closest(".row-fluid-wrapper").next().find(".step-form-container");
    curContainer.hide().promise().pipe(function() {
      nextForm.show();
    });
    if ( $(".last-form").css('display') == 'block' ){$('.form-numbers').hide();} 
  });
  function moveNext(item) {
    var curContainer = $(item).closest(".step-form-container");
    var nextForm = curContainer.closest(".row-fluid-wrapper").next().find(".step-form-container");
    curContainer.hide().promise().pipe(function() {
      nextForm.show();
    });
    if ( $(".last-form").css('display') == 'block' ){$('.form-numbers').hide();} 
  }
  $('.request-a-quote h2').removeClass('wow'); 
  $('.request-a-quote h2').css("animation-name", "none");
  $('.request-a-quote h6').removeClass('wow');
  $('.request-a-quote h2').css("visibility", "visible");
  var formContainers = {};
  function iterateForms() {
    var forms = $('.step-form-container .hs-form');
    if (forms.length >= 5) {
      forms.each(function(ind, item) {
        var $it = $(item);
        var fid = $it.attr('data-form-id');
        var cont = $it.closest('.hbspt-form');
        var contId = cont.attr('id');
        formContainers[fid] = cont;
        cont.closest('span').append('<style>#'+contId+' .submitted-message {display:none;}</style>');
      });
      $(window).on('message', function (e) { 
        var dt = e.originalEvent.data; 
        e.preventDefault(); 
        if (dt && typeof dt['formGuid'] != 'undefined') {
          var guid = dt['formGuid'];
          if (formContainers[guid]) {
            moveNext(formContainers[guid]);
          }
          return false;
        }
      })
    } else {
      setTimeout(iterateForms, 200);
    }
  }
  iterateForms();
});

/*====== Motion Animation Starts here ======*/

var lFollowX = 0,
    lFollowY = 0,
    lFollowZ = 0,
    x = 0,
    y = 0,
    z = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  z += (lFollowZ - z) * friction;
  
  translate    = 'translate(' + x + 'px, ' + y + 'px) scale(1)';
  translateTwo = 'translate(' + y + 'px, ' + x + 'px) scale(1)';
  translateThr = 'translate3d(' + z + 'px, ' + y + 'px,' + x + 'px)';

  $('#Path_1').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('#Path_2').css({
    '-webit-transform': translateTwo,
    '-moz-transform': translateTwo,
    'transform': translateTwo,
    'transition-delay': '0s'
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();



  })();
