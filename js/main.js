$(document).ready(function(){
    /* Begin Map */
    $('.arr_1').hover(function(){
        $('.ineract_round_1').css('opacity','1')
    },function(){
        $('.ineract_round_1').css('opacity','0')
    })
    $('.arr_2').hover(function(){
        $('.ineract_round_2').css('opacity','1')
    },function(){
        $('.ineract_round_2').css('opacity','0')
    })
    
    $('.razvet_arr_2, .anim_map_wrap .item_1').hover(function(){
        $('.razvet_img_4').css('opacity','1');
        $('.anim_map_wrap .item_1').addClass('active');
    },function(){
        $('.razvet_img_4').css('opacity','0');
        $('.anim_map_wrap .item_1').removeClass('active');
    })
    $('.razvet_arr_1, .anim_map_wrap .item_2').hover(function(){
        $('.razvet_img_2').css('opacity','1');
        $('.anim_map_wrap .item_2').addClass('active');
    },function(){
        $('.razvet_img_2').css('opacity','0');
        $('.anim_map_wrap .item_2').removeClass('active');
    })
    $('.razvet_arr_3, .anim_map_wrap .item_4').hover(function(){
        $('.razvet_img_3').css('opacity','1');
        $('.anim_map_wrap .item_4').addClass('active');
    },function(){
        $('.razvet_img_3').css('opacity','0');
        $('.anim_map_wrap .item_4').removeClass('active');
    })
    $('.razvet_arr_4, .anim_map_wrap .item_3').hover(function(){
        $('.razvet_img_1').css('opacity','1');
        $('.anim_map_wrap .item_3').addClass('active');
    },function(){
        $('.razvet_img_1').css('opacity','0');
        $('.anim_map_wrap .item_3').removeClass('active');
    })
    
    

    $('.map_area_8').hover(function(){
        $('.under_map_10').removeClass('item_hidden');
    },function(){
        $('.under_map_10').addClass('item_hidden');
    })
    $('.map_area_9').hover(function(){
        $('.under_map_8').removeClass('item_hidden');
    },function(){
        $('.under_map_8').addClass('item_hidden');
    })
    $('.map_area_6').hover(function(){
        $('.under_map_6').removeClass('item_hidden');
    },function(){
        $('.under_map_6').addClass('item_hidden');
    })
    $('.map_area_2').hover(function(){
        $('.under_map_2').removeClass('item_hidden');
    },function(){
        $('.under_map_2').addClass('item_hidden');
    })
    $('.map_area_3').hover(function(){
        $('.under_map_3').removeClass('item_hidden');
    },function(){
        $('.under_map_3').addClass('item_hidden');
    })
    $('.map_area_7').hover(function(){
        $('.under_map_7').removeClass('item_hidden');
    },function(){
        $('.under_map_7').addClass('item_hidden');
    })
    $('.map_area_5').hover(function(){
        $('.under_map_5').removeClass('item_hidden');
    },function(){
        $('.under_map_5').addClass('item_hidden');
    })
    $('.map_area_4').hover(function(){
        $('.under_map_4').removeClass('item_hidden');
    },function(){
        $('.under_map_4').addClass('item_hidden');
    })
    $('.map_area_10').hover(function(){
        $('.under_map_9').removeClass('item_hidden');
    },function(){
        $('.under_map_9').addClass('item_hidden');
    })
    
    function nabeg_c(){
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
        var n_c_1 = $('.info.active .nabeg_count_1').data('nabegs');
        $('.info.active .nabeg_count_1').animateNumber({ 
            number: n_c_1,
            numberStep: comma_separator_number_step              
        });
        var n_c_2 = $('.info.active .nabeg_count_2').data('nabegs');
        $('.info.active .nabeg_count_2').animateNumber({ 
            number: n_c_2,
            numberStep: comma_separator_number_step              
        });
        
        var n_c_3 = $('.info.active .nabeg_count_3').data('nabegs');
        var decimal_places = 1;
        var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
        $('.info.active .nabeg_count_3').animateNumber(
            {
                number: n_c_3 * decimal_factor,

                numberStep: function(now, tween) {
                    var floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);

                    if (decimal_places > 0) {
                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);

                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', ',');
                    }

                    target.text(floored_number);
                }
            },
            1000
        );
        var n_c_3_2 = $('.info.active .nabeg_count_3_2').data('nabegs');
        $('.info.active .nabeg_count_3_2').animateNumber({ 
            number: n_c_3_2         
        });
    }
    nabeg_c();
   
    $('.map_ar_1').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_1').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.info_1 .nabeg_count_1').html('123');
        nabeg_c();
    })
    
    $('.map_area_8').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_10').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_10').addClass('active');
        nabeg_c();
    })
    $('.map_area_9').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_8').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_8').addClass('active');
        nabeg_c();
    })
    $('.map_area_6').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_6').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_6').addClass('active');
        nabeg_c();
    })
    $('.map_area_2').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_2').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_2').addClass('active');
        nabeg_c();
    })
    $('.map_area_3').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_3').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_3').addClass('active');
        nabeg_c();
    })
    $('.map_area_7').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_7').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_7').addClass('active');
        nabeg_c();
    })
    $('.map_area_5').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_5').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_5').addClass('active');
        nabeg_c();
    })
    $('.map_area_4').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_4').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_4').addClass('active');
        nabeg_c();
    })
    $('.map_area_10').click(function(event){
        event.preventDefault(); 
        $('.region_map2 .info').hide().removeClass('active');
        $('.region_map2 .info_9').fadeIn().addClass('active');
        $('.region_map2 .daln_map .under_map').removeClass('active');
        $('.under_map_9').addClass('active');
        nabeg_c();
    })
    
    
    $('.map_area').click(function(event){
        event.preventDefault(); 
        $('.map_round_indicator').circleProgress({
            fill: {
                gradient: ["#1ea6df"]
            },
            thickness:5,
            startAngle: -Math.PI / 2
        });
    })   
    /* End Map */
});