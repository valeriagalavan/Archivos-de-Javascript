function cargarEstado(id_estado){
            //que quiero hacercuando se seleccione un estado
            console.log('Se selecciono el id_estado: '+id_estado);
        }
        /* State Names */
        var state_names = new Array();
        var state_class = new Array();
            state_names[1]="Aguascalientes";state_names[2]="Baja California";state_names[3]="Baja California Sur";state_names[4]="Campeche";state_names[5]="Coahuila";state_names[6]="Colima";state_names[7]="Chiapas";state_names[8]="Chihuahua";state_names[9]="Distrito Federal";state_names[10]="Durango";state_names[11]="Guanajuato";state_names[12]="Guerrero";state_names[13]="Hidalgo";state_names[14]="Jalisco";state_names[15]="Estado de M&eacute;xico";state_names[16]="Michoac&aacute;n";state_names[17]="Morelos";state_names[18]="Nayarit";state_names[19]="Nuevo Le&oacute;n";state_names[20]="Oaxaca";state_names[21]="Puebla";state_names[22]="Quer&eacute;taro";state_names[23]="Quintana roo";state_names[24]="San Luis Potos&iacute;";state_names[25]="Sinaloa";state_names[26]="Sonora";state_names[27]="Tabasco";state_names[28]="Tamaulipas";state_names[29]="Tlaxcala";state_names[30]="Veracruz";state_names[31]="Yucat&aacute;n";state_names[32]="Zacatecas";
            state_class[1]="AGU";state_class[2]="BCN";state_class[3]="BCS";state_class[4]="CAM";state_class[5]="COA";state_class[6]="COL";state_class[7]="CHP";state_class[8]="CHH";state_class[9]="DIF";state_class[10]="DUR";state_class[11]="GUA";state_class[12]="GRO";state_class[13]="HID";state_class[14]="JAL";state_class[15]="MEX";state_class[16]="MIC";state_class[17]="MOR";state_class[18]="NAY";state_class[19]="NLE";state_class[20]="OAX";state_class[21]="PUE";state_class[22]="QUE";state_class[23]="ROO";state_class[24]="SLP";state_class[25]="SIN";state_class[26]="SON";state_class[27]="TAB";state_class[28]="TAM";state_class[29]="TLA";state_class[30]="VER";state_class[31]="YUC";state_class[32]="ZAC";
        $(function () {
            $('.listaEdos').mouseover(function(e) {                
                $($(this).data('parent-map')).mouseover();
            }).mouseout(function(e) {                
                $($(this).data('parent-map')).mouseout();                    
            }).click(function(e) { 
                e.preventDefault(); 
                $($(this).data('parent-map')).click(); 
            });
			
        
            $('.area').hover(function () {
                var id_estado = $(this).data('id-estado');
                var meid = $(this).attr('id');
                $('#edo').html(state_names[id_estado]);                
                $('#letras'+meid).addClass('listaEdosHover');
                $('.escudo').addClass('escudo_img');
                if(last_selected_id_estado!==null){
                    $('.escudo').removeClass(state_class[last_selected_id_estado]);
                }
                $('.escudo').addClass(meid);
            }).mouseout(function () {
                var meid = $(this).attr('id');
                $('#letras'+meid).removeClass('listaEdosHover');
                $('.escudo').removeClass(meid);
                if(last_selected_id_estado!==null){
                    $('#edo').html(state_names[last_selected_id_estado]);
                    $('.escudo').addClass(state_class[last_selected_id_estado]);
                }else{                    
                    $('#edo').html("&nbsp;");
                    $('.escudo').removeClass('escudo_img');
                    //$('.escudo').attr('class','escudo');
                }
            });
            //$('#map_ID').imageMapResize();//funciona perfectamente
            var areaLastClicked=null;
            var last_selected_id_estado=null;
            $('.area').click(function (e) {
                    e.preventDefault();
                    var $area = $(this);
                    var meid = $area.attr('id');
                    //$('.area').mouseout();
                    var data = $area.data('maphilight') || {};                    
                    if(areaLastClicked!==null){                        
                        var lastData = areaLastClicked.data('maphilight') || {};
                        lastData.alwaysOn=false;
                        $('#letras'+areaLastClicked.attr('id')).removeClass('listaEdosActive');
                        $('.escudo').removeClass(state_class[last_selected_id_estado]);
                    }
                    $('#letras'+meid).addClass('listaEdosActive');
                    areaLastClicked=$area;
                    //data.alwaysOn = !data.alwaysOn;
                    data.alwaysOn = true;
                    $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
                    last_selected_id_estado = $(this).data('id-estado');
                    cargarEstado(last_selected_id_estado);
            });
									
            $('.map').maphilight({ fade: true,strokeColor: '950054', fillColor: '950054', fillOpacity: 0.3 });//funciona, pero no cuando se redimienciona la imagen (cuando se cambia el estylo de la img con widt o height)                        
        });