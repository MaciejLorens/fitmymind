var THEMEMASCOT = THEMEMASCOT || {};

(function($) {
  "use strict";



  THEMEMASCOT.isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (THEMEMASCOT.isMobile.Android() || THEMEMASCOT.isMobile.BlackBerry() || THEMEMASCOT.isMobile.iOS() || THEMEMASCOT.isMobile.Opera() || THEMEMASCOT.isMobile.Windows());
    }
  };

  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") == "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.urlParameter = {
    get: function(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    }
  };


  THEMEMASCOT.bmiCalculator = {
    magic: function(bmi) {
      var output = '';
      var info = '';
      if (bmi) {
        if (bmi < 15) {
          info = "very severely underweight";
        }
        if ((bmi >= 15)&&(bmi < 16)) {
          info = "severely underweight";
        }
        if ((bmi >= 16)&&(bmi < 18.5)) {
          info = "underweight";
        }
        if ((bmi >= 18.5)&&(bmi < 25)) {
          info = "normal";
        }
        if ((bmi >= 25)&&(bmi < 30)) {
          info = "overweight";
        }
        if ((bmi >= 30)&&(bmi < 35)) {
          info = "moderately obese";
        }
        if ((bmi >= 35)&&(bmi <= 40)) {
          info = "severely obese";
        }
        if (bmi >40) {
          info = "very severely obese";
        }
        output = "Your BMI is <span>"  + bmi + "</span><br />" +
          "You are <span>"  + info + "</span>.";
      } else {
        output = "You broke it!";
      };
      return output;
    },

    calculateStandard: function (bmi_form) {
      var weight_lbs = bmi_form.find('input[name="bmi_standard_weight_lbs"]').val();
      var height_ft = bmi_form.find('input[name="bmi_standard_height_ft"]').val();
      var height_in = bmi_form.find('input[name="bmi_standard_height_in"]').val();
      var age = bmi_form.find('input[name="bmi_standard_age"]').val();
      var gender = bmi_form.find('radio[name="bmi_standard_gender"]').val();

      var total_height_inc = ( parseInt(height_ft) * 12 ) + parseInt(height_in);
      var bmi = ( parseFloat(weight_lbs) / (total_height_inc * total_height_inc) ) * 703;
      var output = THEMEMASCOT.bmiCalculator.magic(bmi);

      bmi_form.find('#bmi_standard_calculator_form_result').html(output).fadeIn('slow');
    },

    calculateMetric: function (bmi_form) {
      var weight_kg = bmi_form.find('input[name="bmi_metric_weight_kg"]').val();
      var height_cm = bmi_form.find('input[name="bmi_metric_height_cm"]').val();
      var age = bmi_form.find('input[name="bmi_standard_age"]').val();
      var gender = bmi_form.find('radio[name="bmi_standard_gender"]').val();

      var total_weight_kg = parseFloat(weight_kg) ;
      var total_height_m = parseFloat(height_cm) * 0.01;
      var bmi = ( total_weight_kg / (total_height_m * total_height_m) );
      var output = THEMEMASCOT.bmiCalculator.magic(bmi);

      bmi_form.find('#bmi_metric_calculator_form_result').html(output).fadeIn('slow');
    },

    init: function () {
      var bmi_Standard_Form = $('#form_bmi_standard_calculator');
      bmi_Standard_Form.on('submit', function(e) {
        e.preventDefault();
        THEMEMASCOT.bmiCalculator.calculateStandard(bmi_Standard_Form);
        return false;
      });
    }

  };

  THEMEMASCOT.initialize = {

    init: function() {
      THEMEMASCOT.bmiCalculator.init();
      THEMEMASCOT.initialize.TM_onLoadModal();
      THEMEMASCOT.initialize.TM_platformDetect();
      THEMEMASCOT.initialize.TM_customDataAttributes();
      THEMEMASCOT.initialize.TM_parallaxBgInit();
      THEMEMASCOT.initialize.TM_magnificPopup_lightbox();
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Hash Forwarding  ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_onLoadModal: function() {
      var $modal = $('.modal-on-load');
      if( $modal.length > 0 ) {
        $modal.each( function(){
          var element             = $(this),
            elementTarget       = element.attr('data-target'),
            elementTargetValue  = elementTarget.split('#')[1],
            elementDelay        = element.attr('data-delay'),
            elementTimeout      = element.attr('data-timeout'),
            elementAnimateIn    = element.attr('data-animate-in'),
            elementAnimateOut   = element.attr('data-animate-out');

          if( !element.hasClass('enable-cookie') ) { $.removeCookie( elementTargetValue ); }

          if( element.hasClass('enable-cookie') ) {
            var elementCookie = $.cookie( elementTargetValue );

            if( typeof elementCookie !== 'undefined' && elementCookie == '0' ) {
              return true;
            }
          }

          if( !elementDelay ) {
            elementDelay = 1500;
          } else {
            elementDelay = Number(elementDelay) + 1500;
          }

          var t = setTimeout(function() {
            $.magnificPopup.open({
              items: { src: elementTarget },
              type: 'inline',
              mainClass: 'mfp-no-margins mfp-fade',
              closeBtnInside: false,
              fixedContentPos: true,
              removalDelay: 500,
              callbacks: {
                open: function(){
                  if( elementAnimateIn !== '' ) {
                    $(elementTarget).addClass( elementAnimateIn + ' animated' );
                  }
                },
                beforeClose: function(){
                  if( elementAnimateOut !== '' ) {
                    $(elementTarget).removeClass( elementAnimateIn ).addClass( elementAnimateOut );
                  }
                },
                afterClose: function() {
                  if( elementAnimateIn !== '' || elementAnimateOut !== '' ) {
                    $(elementTarget).removeClass( elementAnimateIn + ' ' + elementAnimateOut + ' animated' );
                  }
                  if( element.hasClass('enable-cookie') ) {
                    $.cookie( elementTargetValue, '0' );
                  }
                }
              }
            }, 0);
          }, Number(elementDelay) );

          if( elementTimeout !== '' ) {
            var to = setTimeout(function() {
              $.magnificPopup.close();
            }, Number(elementDelay) + Number(elementTimeout) );
          }
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ Bootstrap Parent Modal  --------------------- */
    /* ---------------------------------------------------------------------- */
    TM_loadBSParentModal: function() {
      var ajaxLoadContent = true;
      if( ajaxLoadContent ) {
        $.ajax({
          url: "bootstrap_parent_modal",
          success: function (data) { $('body').append(data); },
          dataType: 'html'
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ demo switcher    ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_demoSwitcher: function() {
      var showSwitcher = true;
      var $style_switcher = $('#style-switcher');
      if( !$style_switcher.length && showSwitcher ) {
        $.ajax({
          url: "color-switcher/style-switcher.html",
          success: function (data) { $('body').append(data); },
          dataType: 'html'
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- Platform detect  --------------------- */
    /* ---------------------------------------------------------------------- */
    TM_platformDetect: function() {
      if (THEMEMASCOT.isMobile.any()) {
        $html.addClass("mobile");
      } else {
        $html.addClass("no-mobile");
      }
    },


    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Hash Forwarding  ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_hashForwarding: function() {
      if (window.location.hash) {
        var hash_offset = $(window.location.hash).offset().top;
        $("html, body").animate({
          scrollTop: hash_offset
        });
      }
    },


    /* ---------------------------------------------------------------------- */
    /* ----------------------- Background image, color ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_customDataAttributes: function() {
      $('[data-bg-color]').each(function() {
        $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
      });
      $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
      });
      $('[data-text-color]').each(function() {
        $(this).css('color', $(this).data("text-color"));
      });
      $('[data-font-size]').each(function() {
        $(this).css('font-size', $(this).data("font-size"));
      });
      $('[data-height]').each(function() {
        $(this).css('height', $(this).data("height"));
      });
      $('[data-border]').each(function() {
        $(this).css('border', $(this).data("border"));
      });
      $('[data-margin-top]').each(function() {
        $(this).css('margin-top', $(this).data("margin-top"));
      });
      $('[data-margin-right]').each(function() {
        $(this).css('margin-right', $(this).data("margin-right"));
      });
      $('[data-margin-bottom]').each(function() {
        $(this).css('margin-bottom', $(this).data("margin-bottom"));
      });
      $('[data-margin-left]').each(function() {
        $(this).css('margin-left', $(this).data("margin-left"));
      });
    },



    /* ---------------------------------------------------------------------- */
    /* -------------------------- Background Parallax ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_parallaxBgInit: function() {
      if (!THEMEMASCOT.isMobile.any() && $(window).width() >= 800 ) {
        $('.parallax').each(function() {
          var data_parallax_ratio = ( $(this).data("parallax-ratio") === undefined ) ? '0.5': $(this).data("parallax-ratio");
          $(this).parallax("50%", data_parallax_ratio);
        });
      } else {
        $('.parallax').addClass("mobile-parallax");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Magnific Popup ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_magnificPopup_lightbox: function() {

      $('.image-popup-lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        }
      });

      $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
          verticalFit: true
        }
      });

      $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
          verticalFit: false
        }
      });

      $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
      });

      $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
          }
        }
      });

      $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
          }
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }

      });

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,

        fixedContentPos: false
      });

      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });

      $('.form-ajax-load').magnificPopup({
        type: 'ajax'
      });

      var $ajaxMagnificLightbox = $('[data-lightbox="ajax"]');
      if( $ajaxMagnificLightbox.length > 0 ) {
        $ajaxMagnificLightbox.magnificPopup({
          type: 'ajax',
          closeBtnInside: false,
          callbacks: {
            ajaxContentAdded: function(mfpResponse) {
            },
            open: function() {
            },
            close: function() {
            }
          }
        });
      }

      $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name',

        mainClass: 'mfp-no-margins mfp-fade',
        closeBtnInside: false,
        fixedContentPos: true,

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
          beforeOpen: function() {
            if($(window).width() < 700) {
              this.st.focus = false;
            } else {
              this.st.focus = '#name';
            }
          }
        }
      });

      /*================================
          portfolio magnificPopup
        ================================*/
      var $lightboxImage = $('[data-lightbox="image"]'),
        $lightboxGallery = $('[data-lightbox="gallery"]'),
        $lightboxIframe = $('[data-lightbox="iframe"]'),
        $lightboxInline = $('[data-lightbox="inline"]');

      //lightbox image
      if( $lightboxImage.length > 0 ) {
        $lightboxImage.magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          }
        });
      }

      //lightbox gallery
      if( $lightboxGallery.length > 0 ) {
        $lightboxGallery.each(function() {
          var element = $(this);
          element.magnificPopup({
            delegate: 'a[data-lightbox="gallery-item"]',
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
              verticalFit: true
            },
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            zoom: {
              enabled: true,
              duration: 300, // don't foget to change the duration also in CSS
              opener: function(element) {
                return element.find('img');
              }
            }

          });
        });
      }

      //lightbox iframe
      if( $lightboxIframe.length > 0 ) {
        $lightboxIframe.magnificPopup({
          disableOn: 600,
          type: 'iframe',
          removalDelay: 160,
          fixedContentPos: false
        });
      }

      //lightbox inline
      if( $lightboxInline.length > 0 ) {
        $lightboxInline.magnificPopup({
          type: 'inline',
          mainClass: 'mfp-no-margins mfp-zoom-in',
          closeBtnInside: false,
          fixedContentPos: true
        });
      }
    }

  };


  THEMEMASCOT.header = {

    init: function() {

      var t = setTimeout(function() {
        THEMEMASCOT.header.TM_sidePanelReveal();
        THEMEMASCOT.header.TM_scroolToTopOnClick();
        THEMEMASCOT.header.TM_scrollToFixed();
        THEMEMASCOT.header.TM_topnavAnimate();
        THEMEMASCOT.header.TM_scrolltoTarget();
        THEMEMASCOT.header.TM_menuzord();
        THEMEMASCOT.header.TM_menuCollapseOnClick();
        THEMEMASCOT.header.TM_homeParallaxFadeEffect();
        THEMEMASCOT.header.TM_topsearch_toggle();
      }, 0);

    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------- Side Push Panel ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_sidePanelReveal: function() {
      $(document.body).on('click', '.side-panel-trigger', function(e) {
        $body.toggleClass("side-panel-open");
        if( $body.hasClass('device-touch') ) {
          $body.toggleClass("ohidden");
        }
        return false;
      });

      $(document.body).on('click', '.has-side-panel .body-overlay', function(e) {
        $body.toggleClass("side-panel-open");
        return false;
      });

      //sitebar tree
      $(document.body).on('click', '.side-panel-nav .nav .tree-toggler', function(e) {
        $(this).parent().children('ul.tree').toggle(300);
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- scrollToTop  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_scroolToTop: function() {
      if ($window.scrollTop() > 600) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    },

    TM_scroolToTopOnClick: function() {
      $(document.body).on('click', '.scrollToTop', function(e) {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    },


    /* ---------------------------------------------------------------------------- */
    /* --------------------------- One Page Nav close on click -------------------- */
    /* ---------------------------------------------------------------------------- */
    TM_menuCollapseOnClick: function() {
      $(document).on('click', '.onepage-nav a', function(e) {
        $('.showhide').trigger('click');
        return false;
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ----------- Active Menu Item on Reaching Different Sections ---------- */
    /* ---------------------------------------------------------------------- */
    TM_activateMenuItemOnReach: function() {
      var $onepage_nav = $('.onepage-nav');
      var cur_pos = $window.scrollTop() + 2;
      var nav_height = $onepage_nav.outerHeight();
      $sections.each(function() {
        var top = $(this).offset().top - nav_height - 80,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
          $sections.removeClass('current').removeClass('active');

          //$(this).addClass('current').addClass('active');
          $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
        }
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------- on click scrool to target with smoothness -------- */
    /* ---------------------------------------------------------------------- */
    TM_scrolltoTarget: function() {
      //jQuery for page scrolling feature - requires jQuery Easing plugin
      $('.smooth-scroll-to-target, .fullscreen-onepage-nav a').on('click', function(e) {
        e.preventDefault();

        var $anchor = $(this);

        var $hearder_top = $('.header .header-nav');
        var hearder_top_offset = 0;
        if ($hearder_top[0]){
          hearder_top_offset = $hearder_top.outerHeight(true);
        } else {
          hearder_top_offset = 0;
        }

        //for vertical nav, offset 0
        if ($body.hasClass("vertical-nav")){
          hearder_top_offset = 0;
        }

        var top = $($anchor.attr('href')).offset().top - hearder_top_offset;
        $('html, body').stop().animate({
          scrollTop: top
        }, 1500, 'easeInOutExpo');

      });
    },

    /* ---------------------------------------------------------------------------- */
    /* --------------------------- collapsed menu close on click ------------------ */
    /* ---------------------------------------------------------------------------- */
    TM_scrollToFixed: function() {
      $('.navbar-scrolltofixed').scrollToFixed();
      $('.scrolltofixed').scrollToFixed({
        marginTop: $('.header .header-nav').outerHeight(true) + 10,
        limit: function() {
          var limit = $('#footer').offset().top - $(this).outerHeight(true);
          console.log(limit);
          return limit;
        }
      });
      $('#sidebar').scrollToFixed({
        marginTop: $('.header .header-nav').outerHeight() + 20,
        limit: function() {
          var limit = $('#footer').offset().top - $('#sidebar').outerHeight() - 20;
          return limit;
        }
      });
    },

    /* ----------------------------------------------------------------------------- */
    /* --------------------------- Menuzord - Responsive Megamenu ------------------ */
    /* ----------------------------------------------------------------------------- */
    TM_menuzord: function() {
      $("#menuzord").menuzord({
        align: "left",
        effect: "slide",
        animation: "none",
        indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
      });
      $("#menuzord-right").menuzord({
        align: "right",
        effect: "slide",
        animation: "none",
        indicatorFirstLevel: "", //&#128899;
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
      });
      $("#menuzord-side-panel").menuzord({
        align: "right",
        effect: "slide",
        animation: "none",
        indicatorFirstLevel: "",
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
      });

      $("#menuzord-verticalnav").menuzord({
        align: "right",
        effect: "slide",
        animation: "none",
        indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
        /*indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"*/
      });
    },

    /* ---------------------------------------------------------------------- */
    /* --------------------------- Waypoint Top Nav Sticky ------------------ */
    /* ---------------------------------------------------------------------- */
    TM_topnavAnimate: function() {
      if ($window.scrollTop() > (50)) {
        $(".navbar-sticky-animated").removeClass("animated-active");
      } else {
        $(".navbar-sticky-animated").addClass("animated-active");
      }

      if ($window.scrollTop() > (50)) {
        $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").removeClass("add-padding");
      } else {
        $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").addClass("add-padding");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------- home section on scroll parallax & fade -------------- */
    /* ---------------------------------------------------------------------- */
    TM_homeParallaxFadeEffect: function() {
      if ($window.width() >= 1200) {
        var scrolled = $window.scrollTop();
        $('.content-fade-effect .home-content .home-text').css('padding-top', (scrolled * 0.0610) + '%').css('opacity', 1 - (scrolled * 0.00120));
      }
    },

    /* ---------------------------------------------------------------------- */
    /* --------------------------- Top search toggle  ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_topsearch_toggle: function() {
      $(document.body).on('click', '#top-search-toggle', function(e) {
        e.preventDefault();
        $('.search-form-wrapper.toggle').toggleClass('active');
        return false;
      });
    }

  };

  THEMEMASCOT.widget = {

    init: function() {

      var t = setTimeout(function() {
        THEMEMASCOT.widget.TM_shopClickEvents();
        THEMEMASCOT.widget.TM_funfact();
        THEMEMASCOT.widget.TM_accordion_toggles();
        THEMEMASCOT.widget.TM_tooltip();
        //THEMEMASCOT.widget.TM_countDownTimer();
      }, 0);

    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Shop Plus Minus ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_shopClickEvents: function() {
      $(document.body).on('click', '.quantity .plus', function(e) {
        var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
        if (!isNaN(currentVal)) {
          $(this).parent().children(".qty").val(currentVal + 1);
        }
        return false;
      });

      $(document.body).on('click', '.quantity .minus', function(e) {
        var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
        if (!isNaN(currentVal) && currentVal > 0) {
          $(this).parent().children(".qty").val(currentVal - 1);
        }
        return false;
      });

      $(document.body).on('click', '#checkbox-ship-to-different-address', function(e) {
        $("#checkout-shipping-address").toggle(this.checked);
      });
    },

    TM_portfolioFlexSliderGalleryPopUpInit: function() {
      var $flexSliders = $portfolio_gallery.find('.slides');
      $flexSliders.each(function () {
        var _items = $(this).find("li > a");
        var items = [];
        for (var i = 0; i < _items.length; i++) {
          items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
        }
        $(this).parent().parent().parent().find(".icons-holder").magnificPopup({
          items: items,
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      });
    },


    /* ---------------------------------------------------------------------- */
    /* ----------------------------- CountDown ------------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_countDownTimer: function() {
      var $clock = $('#clock-count-down');
      var endingdate = $clock.data("endingdate");
      $clock.countdown(endingdate, function(event) {
        var countdown_text = '' +
          '<ul class="countdown-timer">' +
          '<li>%D <span>Days</span></li>' +
          '<li>%H <span>Hours</span></li>' +
          '<li>%M <span>Minutes</span></li>' +
          '<li>%S <span>Seconds</span></li>' +
          '</ul>';
        $(this).html(event.strftime(countdown_text));
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ Funfact Number Counter ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_funfact: function() {
      var $animate_number = $('.animate-number');
      $animate_number.appear();
      $(document.body).on('appear', '.animate-number', function() {
        $animate_number.each(function() {
          var current_item = $(this);
          if (!current_item.hasClass('appeared')) {
            current_item.animateNumbers(current_item.attr("data-value"), true, parseInt(current_item.attr("data-animation-duration"), 10)).addClass('appeared');
          }
        });
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------- accordion & toggles ------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_accordion_toggles: function() {
      var $panel_group_collapse = $('.panel-group .collapse');
      $panel_group_collapse.on("show.bs.collapse", function(e) {
        $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").addClass("active");
      });
      $panel_group_collapse.on("hide.bs.collapse", function(e) {
        $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").removeClass("active");
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- tooltip  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_tooltip: function() {
      $('[data-toggle="tooltip"]').tooltip();
    }
  };

  THEMEMASCOT.slider = {

    init: function() {

      var t = setTimeout(function() {
        THEMEMASCOT.slider.TM_typedAnimation();
        THEMEMASCOT.slider.TM_flexslider();
        THEMEMASCOT.slider.TM_owlCarousel();
      }, 0);

    },


    /* ---------------------------------------------------------------------- */
    /* -------------------------- Typed Text Carousel  ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_typedAnimation: function() {
      if ($('.typed-text-carousel').length) {
        $('.typed-text-carousel').each(function() {
          var string_1 = $(this).find('span:first-child').text();
          var string_2 = $(this).find('span:nth-child(2)').text();
          var string_3 = $(this).find('span:nth-child(3)').text();
          var str = '';
          var $this = $(this);
          if (!string_2.trim() || !string_3.trim()) {
            str = [string_1];
          }
          if (!string_3.trim() && string_2.length) {
            str = [string_1, string_2];
          }
          if (string_1.length && string_2.length && string_3.length) {
            str = [string_1, string_2, string_3];
          }
          var speed = $(this).data('speed');
          var back_delay = $(this).data('back_delay');
          var loop = $(this).data('loop');
          $(this).typed({
            strings: str,
            typeSpeed: speed,
            backSpeed: 0,
            backDelay: back_delay,
            cursorChar: "|",
            loop: loop,
            contentType: 'text',
            loopCount: false
          });
        });
      }
    },


    /* ---------------------------------------------------------------------- */
    /* -------------------------------- flexslider  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_flexslider: function() {
      var $flexSlider = $('.flexslider-wrapper').find('.flexslider');
      if( $flexSlider.length > 0 ){
        $flexSlider.each(function() {
          THEMEMASCOT.widget.TM_portfolioFlexSliderGalleryPopUpInit();
          var $flexsSlider = $(this),
            flexsAnimation = $flexsSlider.parent().data('animation'),
            flexsEasing = $flexsSlider.parent().data('easing'),
            flexsDirection = $flexsSlider.parent().data('direction'),
            flexsSlideshow = $flexsSlider.parent().data('slideshow'),
            flexsSlideShowSpeed = $flexsSlider.parent().data('slidespeed'),
            flexsAnimationSpeed = $flexsSlider.parent().data('animationspeed'),
            flexsControlNav = $flexsSlider.parent().data('controlnav'),
            flexsArrows = $flexsSlider.parent().data('arrows'),
            flexsThumbnails = $flexsSlider.parent().data('thumbnails'),
            flexsPauseHover = $flexsSlider.parent().data('pausehover');

          if( !flexsAnimation ) { flexsAnimation = 'slide'; }
          if( !flexsEasing || flexsEasing == 'swing' ) {
            flexsEasing = 'swing';
          }
          if( !flexsDirection ) { flexsDirection = 'horizontal'; }
          if( flexsSlideshow == false ) { flexsSlideshow = false; } else { flexsSlideshow = true; }
          if( !flexsSlideShowSpeed ) { flexsSlideShowSpeed = 5000; }
          if( !flexsAnimationSpeed ) { flexsAnimationSpeed = 600; }
          if( flexsControlNav == false ) { flexsControlNav = false; } else { flexsControlNav = true; }
          if( flexsThumbnails == true ) { flexsControlNav = 'thumbnails'; }
          if( flexsArrows == false ) { flexsArrows = false; } else { flexsArrows = true; }
          if( flexsPauseHover == false ) { flexsPauseHover = false; } else { flexsPauseHover = true; }

          $flexsSlider.flexslider({
            rtl: THEMEMASCOT.isRTL.check(),
            selector: ".slides > li",
            animation: flexsAnimation,
            easing: flexsEasing,
            direction: flexsDirection,
            slideshow: flexsSlideshow,
            slideshowSpeed: Number(flexsSlideShowSpeed),
            animationSpeed: Number(flexsAnimationSpeed),
            pauseOnHover: flexsPauseHover,
            controlNav: flexsControlNav,
            directionNav: flexsArrows,
            start: function(slider){
              imagesLoaded($portfolio_gallery, function(){
                setTimeout(function(){
                  $portfolio_filter_first_child.trigger("click");
                },500);
              });
              THEMEMASCOT.initialize.TM_magnificPopup_lightbox();
            },
            after: function(){
            }
          });
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------------- Owl Carousel  ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_owlCarousel: function() {
      $('.owl-carousel-1col, .text-carousel, .image-carousel, .fullwidth-carousel').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 1,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="pe-7s-angle-left"></i>',
            '<i class="pe-7s-angle-right"></i>'
          ]
        });
      });

      $('.owl-carousel-2col').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 2,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 2,
              center: false
            },
            960: {
              items: 2
            },
            1170: {
              items: 2
            },
            1300: {
              items: 2
            }
          }
        });
      });

      $('.owl-carousel-3col').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 3,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 2,
              center: false
            },
            960: {
              items: 2
            },
            1170: {
              items: 3
            },
            1300: {
              items: 3
            }
          }
        });
      });

      $('.owl-carousel-4col').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 4,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 2,
              center: false
            },
            960: {
              items: 3
            },
            1170: {
              items: 4
            },
            1300: {
              items: 4
            }
          }
        });
      });

      $('.owl-carousel-5col').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 5,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 2,
              center: false
            },
            750: {
              items: 3,
              center: false
            },
            960: {
              items: 4
            },
            1170: {
              items: 5
            },
            1300: {
              items: 5
            }
          }
        });
      });

      $('.owl-carousel-6col').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          items: 6,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 2,
              center: false
            },
            750: {
              items: 3,
              center: false
            },
            960: {
              items: 4
            },
            1170: {
              items: 6
            },
            1300: {
              items: 6
            }
          }
        });
      });

      $(".team-carousel-1col").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          750: {
            items: 1,
            center: false
          },
          960: {
            items: 1
          },
          1170: {
            items: 1
          },
          1300: {
            items: 1
          }
        }
      });

      $(".services-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: true,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 2
          },
          1170: {
            items: 3
          },
          1300: {
            items: 3
          }
        }
      });

      $(".featured-project-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 1
          },
          1170: {
            items: 1
          },
          1300: {
            items: 1
          }
        }
      });

      $(".widget-video-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        items: 1,
        loop: true,
        dots: true,
        nav: false
      });

      $(".widget-image-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 2000,
        smartSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        nav: false
      });

      $(".gallery-list-carosel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 2,
            center: false
          },
          600: {
            items: 4,
            center: false
          },
          960: {
            items: 6
          },
          1170: {
            items: 6
          },
          1300: {
            items: 6
          }
        }
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        rtl: THEMEMASCOT.isRTL.check(),
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 1
          },
          1170: {
            items: 1
          },
          1300: {
            items: 1
          }
        }
      });

      $(".carousel-2col").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 1
          },
          1170: {
            items: 2
          },
          1300: {
            items: 2
          }
        }
      });

      $(".testimonial-carousel-3col").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: true
          },
          600: {
            items: 1,
            center: true
          },
          960: {
            items: 2
          },
          1170: {
            items: 3
          },
          1300: {
            items: 3
          }
        }
      });

      $(".product-details-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        navText: [
          '<i class="pe-7s-angle-left"></i>',
          '<i class="pe-7s-angle-right"></i>'
        ]
      });

      $('.testimonial-carousel-info').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 1,
              center: false
            },
            960: {
              items: 1
            },
            1170: {
              items: 1
            },
            1300: {
              items: 1
            }
          }
        });
      });

      $(".widget-testimonial-carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 2000,
        smartSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        nav: false
      });

      $(".news-carousel-2col").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: false,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 2
          },
          1170: {
            items: 2
          },
          1300: {
            items: 2
          }
        }
      });

      $(".news-carousel-3col").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            center: false
          },
          600: {
            items: 1,
            center: false
          },
          960: {
            items: 2
          },
          1170: {
            items: 3
          },
          1300: {
            items: 3
          }
        }
      });

      $(".clients-logo.carousel").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 2000,
        items: 5,
        dots: false,
        nav: false,
        responsive: {
          0: {
            items: 3,
            center: false
          },
          600: {
            items: 3,
            center: false
          },
          960: {
            items: 4
          },
          1170: {
            items: 6
          },
          1300: {
            items: 6
          }
        }
      });

      $('.recent-project').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 2,
              center: false
            },
            750: {
              items: 4,
              center: false
            },
            960: {
              items: 4
            },
            1170: {
              items: 4
            },
            1300: {
              items: 4
            }
          }
        });
      });

      $('.training-classes-carousel').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: false,
          autoplayTimeout: 4000,
          loop: true,
          margin: 30,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 2,
              center: false
            },
            960: {
              items: 3
            },
            1170: {
              items: 3
            },
            1300: {
              items: 3
            }
          }
        });
      });

      $(".carousel-slider-four").owlCarousel({
        rtl: THEMEMASCOT.isRTL.check(),
        autoplay: true,
        autoplayTimeout: 2000,
        items: 4,
        margin: 15,
        loop: true,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
          0: {
            items: 3,
            center: false
          },
          600: {
            items: 3,
            center: false
          },
          960: {
            items: 4
          },
          1170: {
            items: 4
          },
          1300: {
            items: 4
          }
        }
      });

      $('.schedule-box-carousel').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          margin: 30,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 1,
              center: false
            },
            750: {
              items: 2,
              center: false
            },
            960: {
              items: 4
            },
            1170: {
              items: 4
            },
            1300: {
              items: 4
            }
          }
        });
      });


      $('.products-carousel').each(function() {
        var data_dots = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
        var data_nav = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
        $(this).owlCarousel({
          rtl: THEMEMASCOT.isRTL.check(),
          autoplay: true,
          autoplayTimeout: 4000,
          loop: true,
          margin: 15,
          dots: data_dots,
          nav: data_nav,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              center: false
            },
            600: {
              items: 2,
              center: false
            },
            750: {
              items: 3,
              center: false
            },
            960: {
              items: 3
            },
            1170: {
              items: 3
            },
            1300: {
              items: 3
            }
          }
        });
      });
    }
  };

  THEMEMASCOT.documentOnLoad = {

    init: function() {

      $window.trigger("scroll");

      var t = setTimeout(function() {
        THEMEMASCOT.initialize.TM_hashForwarding();
        THEMEMASCOT.initialize.TM_parallaxBgInit();
      }, 0);

    }

  };

  //document ready
  THEMEMASCOT.documentOnReady = {

    init: function() {
      THEMEMASCOT.initialize.init();
      THEMEMASCOT.header.init();
      THEMEMASCOT.slider.init();
      THEMEMASCOT.widget.init();
      THEMEMASCOT.documentOnReady.windowscroll();
    },

    windowscroll: function(){

      $window.on( 'scroll', function(){

        THEMEMASCOT.header.TM_scroolToTop();
        THEMEMASCOT.header.TM_activateMenuItemOnReach();
        THEMEMASCOT.header.TM_topnavAnimate();
      });
    }

  };

  /* ---------------------------------------------------------------------- */
  /* -------------------------- Declare Variables ------------------------- */
  /* ---------------------------------------------------------------------- */
  var $window = $(window),
    $html = $('html'),
    $body = $('body'),
    $sections = $('section'),
    $portfolio_gallery = $(".portfolio-gallery"),
    portfolio_filter = ".portfolio-filter a",
    $portfolio_filter_first_child = $(".portfolio-filter a:eq(0)");

  /* ---------------------------------------------------------------------- */
  /* ---------------------------- Call Functions -------------------------- */
  /* ---------------------------------------------------------------------- */
  $(document).ready(THEMEMASCOT.documentOnReady.init);
  $window.load(THEMEMASCOT.documentOnLoad.init);

})(jQuery);


